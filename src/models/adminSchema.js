const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define schema
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10); // 10 = salt rounds
    next();
  } catch (err) {
    next(err);
  }
});

// Add comparePassword method
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export model
module.exports = mongoose.model('Admin', adminSchema);
