const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async () => {
    const { email, password, role } = req.body;

}

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Either email or password is required."
        })
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if (!isPasswordMatched) {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        })
    }
    const payload = {
        id: user._id,
        role: user.role,
        permissions: user.permissions
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' })

    return res.status(200).json({
        message: "Login Successful",
        accessToken: token,
        user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        permissions: user.permissions
    }
    })


}

module.exports = {
    register, login
}