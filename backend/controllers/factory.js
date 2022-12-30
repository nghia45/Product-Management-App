import Product from "../models/Product.js";
import Stock from "../models/Stock.js";
import Users from "../models/Users.js";
import Export from "../models/Export.js";
export const addProToStock = async (req, res, next) => {
    const facId = req.params.facid;
    const proId = req.params.proid;
    try {
      const stockPro = await Stock.findOne({productId: proId,director: facId});
      if(stockPro) {
         await Stock.updateOne({director:facId, productId:proId},
                               {$inc: {quantity: req.body.quantity}});
      } else {
        const newStock = new Stock({
          status: 'In Factory',
          quantity: req.body.quantity,
          productId: proId,
          director: facId,
        });
        await newStock.save();
      }
      res.status(200).json("Factory's stock has been updated.");
    } catch (err) {
      next(err);
    }
};

export const exportToStore = async (req, res, next) => {
  const facId = req.params.facid;
  const storeId = req.params.storeid;
  const proId = req.params.proid;
  try {
    const stockPro = await Stock.findOne({productId: proId,director: storeId});
    if(stockPro) {
       await Stock.updateOne({director:facId, productId:proId},
                             {$inc: {quantity: -req.body.quantity}});
       await Stock.updateOne({director:storeId, productId:proId},
                             {$inc: {quantity: req.body.quantity}});
       const newExport = new Export({quantity: req.body.quantity,
                                     productId: proId,
                                     factoryId: facId,
                                     storeId: storeId,});
       await newExport.save();
    } else {
      const newStock = new Stock({
        status: 'In Store',
        quantity: req.body.quantity,
        productId: proId,
        director: storeId,
      });
      await Stock.updateOne({director:facId, productId:proId},
                             {$inc: {quantity: -req.body.quantity}});
      await newStock.save();
      const newExport = new Export({quantity: req.body.quantity,
        productId: proId,
        storeId: storeId,
        factoryId: facId,});
        await newExport.save();
    }
    res.status(200).json("Store's stock has been updated.");
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  const facId = req.params.id;
  const proId = req.params.proid;
  try {
    const fac = await Stock.find({director:facId, productId:proId}).populate("productId");
    res.status(200).json(fac);
  } catch (err) {
    next(err);
  }
};
export const getProducts = async (req, res, next) => {
  const facId = req.params.id;
  try {
    const Facs = await Stock.find({director: facId}).populate("productId");
    res.status(200).json(Facs);
  } catch (err) {
    next(err);
  }
};

export const getFactory = async (req, res, next) => {
  const facId = req.params.id;
  try {
    const fac = await Users.findById(facId);
    res.status(200).json(fac);
  } catch (err) {
    next(err);
  }
};

export const getFactorys = async (req, res, next) => {
  try {
    const Facs = await Users.find({isFactory: true});
    res.status(200).json(Facs);
  } catch (err) {
    next(err);
  }
};

export const deleteFactoryproduct = async (req, res, next) => {
  try {
    const del = await Stock.findByIdAndDelete(req.params.id);
    res.status(200).json(del);
  } catch (err) {
    next(err);
  }
};

export const getExports = async (req, res, next) => {
  try {
    const exs = await Export.find({factoryId: req.params.id}).populate(["productId", "storeId"]);
    res.status(200).json(exs);
  } catch (err) {
    next(err);
  }
};

export const deleteExport = async (req, res, next) => {
  try {
    const del = await Export.findByIdAndDelete(req.params.id);
    res.status(200).json(del);
  } catch (err) {
    next(err);
  }
};



