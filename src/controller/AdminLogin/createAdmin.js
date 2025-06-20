const Admin = require("../../models/adminSchema");

const createAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are mandatory" });
  }

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({ error: "Admin already exists" });
    }

    // DO NOT hash the password here — let schema pre-save do it
    const newAdmin = new Admin({ email, password });

    await newAdmin.save();

    return res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Error creating admin:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createAdmin };
