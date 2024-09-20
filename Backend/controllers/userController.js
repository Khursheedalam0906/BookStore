import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter all fields", success: false });
    }
    const checkUserExist = await User.findOne({ email });
    if (checkUserExist) {
      return res
        .status(400)
        .json({ message: "Email already exist", success: false });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();

    const user = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };

    return res
      .status(200)
      .json({ message: "Account created successfully", user, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter all fields", success: false });
    }
    const checkUserExist = await User.findOne({ email });
    if (!checkUserExist) {
      return res
        .status(400)
        .json({ message: "Enter valid Credentials", success: false });
    }
    const comparePassword = await bcrypt.compare(
      password,
      checkUserExist.password
    );
    if (comparePassword) {
      const user = {
        _id: checkUserExist._id,
        name: checkUserExist.name,
        email: checkUserExist.email,
      };
      return res
        .status(200)
        .json({ message: "Login successfully", user, success: true });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};
