import axios from './uni-axios'
import {refreshToken} from "../api/login";
import {post} from './request'

// 创建自定义接口服务实例
const http = axios.create({
    baseURL: 'https://www.yllook.com/api',
    timeout: 60 * 1000,  // 不可超过 manifest.json 中配置 networkTimeout的超时时间
    // #ifdef H5
    withCredentials: true,
    // #endif
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json'
        //'X-Requested-With': 'XMLHttpRequest',
    },
});

// 拦截器 在请求之前拦截
http.interceptors.request.use(config => {
    const token = uni.getStorageSync('accessToken');
    const userInfo = uni.getStorageSync('userInfo');
    let commonHeader = {};
    if (token && userInfo) {
        commonHeader = {
            "x-api-key": token,
            "merchant-id": userInfo.merchant_id
        };
    }
    config.headers = { ...config.headers, ...commonHeader };
    if (!token) {
        return config
    }
    const user = uni.getStorageSync('user');
    const loginTime = uni.getStorageSync('loginTime');
    const currentTime = new Date().getTime() / 1000;
    if (currentTime + 500 - loginTime < user.expiration_time) {
        return config
    } else {
        post(refreshToken, {
            refresh_token: user.refresh_token,
            group: 'tinyShopMiniProgram'
        }).then(r=>{
            if (r.code === 200) {
                uni.setStorage({
                    key: 'accessToken',
                    data: r.data.access_token
                });
                uni.setStorage({
                    key: 'user',
                    data: r.data
                });
                uni.setStorage({//缓存用户登陆状态
                    key: 'userInfo',
                    data: r.data.member
                })
                uni.setStorage({
                    key: 'loginTime',
                    data: new Date().getTime() / 1000
                });
                uni.setStorage({
                    key: 'refreshToken',
                    data: r.data.refresh_token
                });
                commonHeader = {
                    "x-api-key": r.data.access_token,
                    "merchant-id": r.data.member.merchant_id
                };
                config.headers = { 'Content-Type': 'application/json', ...commonHeader };
                return config;
            } else {
                uni.clearStorageSync();
                uni.showToast({
                    title: "会话已过期， 请重新登录！",
                    icon: 'none'
                });
                setTimeout(() => {
                    uni.reLaunch({
                        url: '/pages/public/login'
                    });
                }, 1.5 * 1000);
            }
        }).catch(() =>{
            uni.clearStorageSync();
            uni.showToast({
                title: "会话已过期， 请重新登录！",
                icon: 'none'
            });
            setTimeout(() => {
                uni.reLaunch({
                    url: '/pages/public/login'
                });
            }, 1.5 * 1000);
        })
    }
    // code...
    // 获取本地存储的Cookie
    // const cookie = uni.getStorageSync('cookie')
    // 设置Cookie
    // config.headers.Cookie = cookie
    // console.log(config)
    // _reqlog(config)
});

// 拦截器 在请求之后拦截
http.interceptors.response.use(response => {
    uni.hideLoading();
    switch (response.data.code) {
        case 200:
            return response.data;
            break;
        case 401:
            uni.clearStorageSync();
            uni.removeStorage({
                key: 'accessToken'
            })
            uni.removeStorage({
                key: 'refreshToken'
            })
            uni.showToast({
                title: "会话已过期， 请重新登录！",
                icon: 'none'
            });
            setTimeout(() => {
                uni.reLaunch({
                    url: '/pages/public/login'
                });
            }, 1.5 * 1000);
            break;
        case 400:
            uni.showToast({title: "错误的请求", icon: 'none'});
            break;
        case 405:
            // uni.clearStorageSync();
            uni.showToast({title: "当前操作不被允许", icon: 'none'});
            break;
        case 404:
            uni.showToast({title: "你似乎到了未知领取~", icon: 'none'});
            break;
        case 429:
            uni.showToast({title: "请求过多，先休息一下吧~", icon: 'none'});
            break;
        case 500:
            uni.showToast({title: "服务器打瞌睡了~", icon: 'none'});
            break;
        default:
            return response.data;
            break
    }
}, error => {
    uni.hideLoading();
    return Promise.reject(error.message)
});

export default http;

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    http
      .get(url,{
          params,
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}