import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const username = await User.findOne({ username: req.body.username });
  if (username) {
    res.status(500).send("Trung ten dang nhap");
    return next(createError(500, "Trùng tên đăng nhập"))
  } else {
    const email = await User.findOne({ email: req.body.email });
    if (email) {
      res.status(500).send("Trung email");
      return next(createError(500, "Trùng email!"))
    };
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "Không tìm thầy tên đăng nhập!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Sai mật khẩu hoặc tên đăng nhập!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, isFactory: user.isFactory, isStore: user.isStore, isService: user.isService },
      process.env.JWT
    );

    const { password, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};