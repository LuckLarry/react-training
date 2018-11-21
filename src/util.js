//根据用户信息，返回跳转地址
export  function getRedirectPath({type,avatar}) {
    console.log({type,avatar})
    let url = (type==='boss')?'/boss':'/genius'
    if(!avatar){
        url += 'info'
    }
    return url;
}