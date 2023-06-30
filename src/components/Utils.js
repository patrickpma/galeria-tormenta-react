export const Utils = {
    auth
};

function auth(user, pwd) {
    return (user === 'admin' && pwd === '1234');
}