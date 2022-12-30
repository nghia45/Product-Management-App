import Users from "../models/Users.js"
import Warranty from "../models/Warranty.js";

export const getWarranty = async (req, res, next) => {
  const serId = req.params.id;
  const orderId = req.params.orderid;
  try {
    const war = await Warranty.find({serviceId:serId, orderId: orderId}).populate("orderId");
    res.status(200).json(war);
  } catch (err) {
    next(err);
  }
};

export const getWarrantys = async (req, res, next) => {
  const serId = req.params.id;
  try {
    const wars = await Warranty.find({serviceId: serId}).populate("orderId");
    res.status(200).json(wars);
  } catch (err) {
    next(err);
  }
};

export const getSer = async (req, res, next) => {
  const serId = req.params.id;
  try {
    const ser = await Users.find({_id: serId});
    res.status(200).json(ser);
  } catch (err) {
    next(err);
  }
};

export const getSers = async (req, res, next) => {
  try {
    const Sers = await Users.find({isService: true});
    res.status(200).json(Sers);
  } catch (err) {
    next(err);
  }
};


export const updateWarranty = async (req, res, next) => {
  try {
    const updatedWarranty = await Warranty.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedWarranty);
  } catch (err) {
    next(err);
  }
};
