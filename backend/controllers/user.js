import User from "../models/Users.js";
import Order from "../models/Order.js";
import Warranty from "../models/Warranty.js";
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getIncomeMonthly = async (req, res, next) => {
  const date = new Date();
  const Monthly = new Date(date.setMonth(0));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: Monthly } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
};

// export const getTotalIncome = async (req, res, next) => {
//   try {
//     const incomeList = await getIncomeMonthly;
//     let income = 0;
//     incomeList.forEach((order) => {
//       income += order.income;
//     });
//     res.status(200).json(incomeList);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

export const getWarrantyMonthly = async (req, res, next) => {
  const date = new Date();
  const Monthly = new Date(date.setMonth(0));
  try {
    const warranty = await Warranty.aggregate([
      { $match: { createdAt: { $gte: Monthly } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(warranty);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const countUser = async (req, res, next) => {
  try {
    const count = await User.countDocuments({});
    res.status(200).json(count);
  } catch (err) {
    next(err);
  }
};

export const countOrder = async (req, res, next) => {
  try {
    const count = await Order.countDocuments({});
    res.status(200).json(count);
  } catch (err) {
    next(err);
  }
};
