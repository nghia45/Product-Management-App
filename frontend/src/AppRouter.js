import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import BigCorp from "./components/BigCorp/Bigcorp";
import Addaccount from "./components/AddAcount/Addaccount";
import ProductLine from "./components/ProductLine/Productline";
import Addproduct from "./components/AddProduct/Addproduct";
import AddConsignment from "./components/AddConsignment/AddConsignment";
import AddStorage from "./components/AddStorage/AddStorage";
import AddOrder from "./components/AddOrder/AddOrder";
import AddGuarantee from "./components/AddGuarantee/AddGuarantee";
import List from "./components/List/List.js";
import ListStore from "./components/List/ListStore.js";
import ListFactory from "./components/List/ListFactory.js";
import {
  userColumns,
  proColumns,
  orderColumns,
  stockColumns,
} from "./databaseSource.js";
import { productInputs, userInputs } from "./formSource.js";
import ReturnProduct from "./components/ReturnProduct/ReturnProduct.js";

function AppRouter() {
  //console.log(userColumns);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bigcorp" element={<BigCorp />} />
        <Route
          path="/addaccount"
          element={<Addaccount inputs={userInputs} title="Add New User" />}
        />
        <Route path="/productline" element={<ProductLine />} />
        <Route
          path="/addproduct"
          element={
            <Addproduct inputs={productInputs} title="Add New Product" />
          }
        />
        <Route path="/users" element={<List columns={userColumns} />} />
        <Route path="/products" element={<List columns={proColumns} />} />
        <Route path="/product" element={<List columns={orderColumns} />} />
        <Route path="/orders" element={<ListStore columns={orderColumns} />} />
        <Route
          path="/storeproducts"
          element={<ListStore columns={stockColumns} />}
        />
        <Route
          path="/factoryproducts"
          element={<ListFactory columns={stockColumns} />}
        />
        <Route
          path="/addconsignment"
          element={
            <AddConsignment inputs={userInputs} title="Xuất lô sản phẩm" />
          }
        />
        <Route
          path="/addtostorage"
          element={
            <AddStorage inputs={userInputs} title="Thêm sản phẩm vào kho" />
          }
        />
        <Route
          path="/addorder"
          element={<AddOrder inputs={userInputs} title="Tạo đơn hàng" />}
        />
        <Route
          path="/addguarantee"
          element={
            <AddGuarantee inputs={userInputs} title="Tạo đơn bảo hành" />
          }
        />
        <Route
          path="/returnproduct"
          element={<ReturnProduct title="Hoàn trả sản phẩm lỗi" />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
