const jwt = require('express-jwt');
const { secret } = require('../../config.json');

module.exports = function authorize(claims = []) {

    if (typeof claims === 'string') {
        claims = [claims];
    }
    return [
        jwt({ secret, algorithms: ['HS256'] }), (req, res, next) => {
            if (claims.length && !req.user.claims.some(s => claims.includes(s))) {
                return res.status(401).json({ message: 'Unauthorized' });
            } else {
                next();
            }

        }
    ];
}