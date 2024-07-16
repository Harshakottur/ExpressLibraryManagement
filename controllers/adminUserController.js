const AdminUser = require('../models/AdminUser');

exports.createAdminUser = async (req, res) => {
  try {
    const adminUser = new AdminUser(req.body);
    await adminUser.save();
    res.status(201).json(adminUser);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.listAdminUsers = async (req, res) => {
  try {
    const adminUsers = await AdminUser.find();
    res.status(200).json(adminUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

