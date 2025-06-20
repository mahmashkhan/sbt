const User = require('../../models/adminSchema');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "12345678";

const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ message: 'All fields are required' });

    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ message: 'Invalid email or password' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(401).json({ message: 'Invalid email or password' });

        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { Login };
