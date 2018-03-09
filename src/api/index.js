/*
与后台交互模块
*/

import ajax from './ajax'

/*
根据经纬度获取位置详情
*/
export const reqPosition = (geohash) => ajax('/api/position/' + geohash)

/*
获取食品分类列表
*/
export const reqCategory = () => ajax('/api/index_category')

/*
获取商铺列表
*/
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})

/*
获取次性验证码
*/
export const reqCaptcha = () => ajax('/captcha')

/*
用户名密码登陆
*/
export const pwdLogin = ({name, pwd}) => ajax('/login_pwd', {name, pwd})

/*
发送短信验证码
*/
export const sendcode = (phone) => ajax('/sendcode', phone)

/*
手机号验证码登陆
*/
export const smsLogin = ({phone, code}) => ajax('/login_sms', {phone, code})

/*
根据会话获取用户信息
*/
export const getUserinfo = () => ajax('/userinfo')
