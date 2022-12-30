import Stock from "../models/Stock.js";
import Order from "../models/Order.js";
import Warranty from "../models/Warranty.js";
import Users from "../models/Users.js";
import Product from "../models/Product.js";
export const sellProduct = async (req, res, next) => {
    const storeId = req.params.storeid;
    const proId = req.params.proid;
    const pro = await Product.findById(proId);
    try {
      await Stock.updateOne({director:storeId, productId: proId},
                            {$inc: {quantity: -1}});
      const newOrder = new Order({
        customerName: req.body.customerName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        productId: proId,
        storeId: storeId,
        status: 'Sold',
        amount: pro.priceEach,
      })
      await newOrder.save();
    res.status(200).json("order have been created");
    } catch (err) {
      next(err);
    }
};

export const moveBrokenProToService = async (req, res, next) => {
  const serviceId = req.params.serviceid;
  const orderId = req.params.orderid;
  try {
  await Order.updateOne({_id: orderId},
                        {$inc: {WarrantyTime: 1}, 
                         $set: {status: 'In Service'}});
  const newWarranty = new Warranty({
    staff: req.body.staff,
    desc: req.body.desc,
    status: 'In reparing',
    orderId: orderId,
    serviceId: serviceId,
  })
  await newWarranty.save();
  res.status(200).json("success");
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  const stoId = req.params.id;
  const proId = req.params.proid;
  try {
    const sto = await Stock.find({director:stoId, productId:proId}).populate("productId");
    res.status(200).json(sto);
  } catch (err) {
    next(err);
  }
};
export const getProducts = async (req, res, next) => {
  const stoId = req.params.id;
  try {
    const stos = await Stock.find({director: stoId}).populate("productId");
    res.status(200).json(stos);
  } catch (err) {
    next(err);
  }
};

export const getStore = async (req, res, next) => {
  const stoId = req.params.id;
  try {
    const sto = await Users.findById(stoId);
    res.status(200).json(sto);
  } catch (err) {
    next(err);
  }
};

export const getStores = async (req, res, next) => {
  try {
    const stos = await Users.find({isStore: true});
    res.status(200).json(stos);
  } catch (err) {
    next(err);
  }
};

export const getOrder = async (req, res, next) => {
  const orderId = req.params.orderid;
  try {
    const sto = await Order.findById(orderId);
    res.status(200).json(sto);
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  const stoId = req.params.id;
  try {
    const stos = await Order.find({storeId: stoId}).populate("productId");
    res.status(200).json(stos);
  } catch (err) {
    next(err);
  }
};

export const getOrdersInstore = async (req, res, next) => {
  const stoId = req.params.id;
  try {
    const stos = await Order.find({storeId: stoId,status: 'Sold'}).populate("productId");
    res.status(200).json(stos);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const deletestoreproduct = async (req, res, next) => {
  try {
    const del = await Stock.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted!");
  } catch (err) {
    next(err);
  }
};