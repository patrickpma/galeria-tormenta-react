export const Utils = {
    auth,
    api,
    v2
};

function auth(user, pwd) {
    return (user.toLowerCase() === 'admin' && pwd === 'qwe@2510');
}

function api() {
    return "http://10.0.0.159:8088/api/v1/";
}

function v2() {
    return "http://10.0.0.159:8088/api/v2/";
}