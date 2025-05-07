import jwt from "jsonwebtoken";
const isAuth = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access12"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

export default isAuth;
