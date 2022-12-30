import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  const newPro = new Product(req.body);
  try {
    const savedPro = await newPro.save();
    res.status(200).json(savedPro);
  } catch (err) {
    next(err);
  }
};
export const updatePro = async (req, res, next) => {
  try {
    const updatedPro = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPro);
  } catch (err) {
    next(err);
  }
};
export const deletePro = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getPro = async (req, res, next) => {
  try {
    const pro = await Product.findById(req.params.id);
    res.status(200).json(pro);
  } catch (err) {
    next(err);
  }
};
export const getPros = async (req, res, next) => {
  const { ...others } = req.query;
  try {
    const pros = await Product.find({
      ...others,
    });
    res.status(200).json(pros);
  } catch (err) {
    next(err);
  }
};


