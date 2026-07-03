const jwt = require('jsonwebtoken')

const verifyAccessToken = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization || req.headers.Authorization

        if (!accessToken) {
            return res.status(401).json({
                success: false,
                message: "Access Denied, No token provided",
            })
        }

        const token = accessToken.startsWith("Bearer ") ? accessToken.split(" ")[1] : accessToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token format"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or Expired token"
        })
    }
}




module.exports= {verifyAccessToken}