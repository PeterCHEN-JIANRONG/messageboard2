function check(msg){
    if(msg == 1 ) return true
    return false
}
function checkEmail(msg){
    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    return emailRule.test(msg)
}
function checkName(msg){
    NameRule = /[A-Za-z]{3,}/;
    return NameRule.test(msg)
}

module.exports = {
    check,
    checkEmail,
    checkName
}