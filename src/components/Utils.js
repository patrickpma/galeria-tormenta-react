export const Utils = {
    auth
};

function auth(user, pwd) {
    return (user.toLowerCase() === 'admin' && pwd === 'qwe@2510');
}