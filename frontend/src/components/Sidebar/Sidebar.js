import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import ConstructionIcon from "@mui/icons-material/Construction";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ReorderIcon from "@mui/icons-material/Reorder";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex.js";

import { Button } from "@mui/material";

import "./Sidebar.scss";
import Add from "@mui/icons-material/Add";
import { GridMenuIcon } from "@mui/x-data-grid";

const Sidebar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Big Corp</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        {user.isAdmin && (
          <ul>
            <p className="title">TRANG CHÍNH</p>
            <Link to="/bigcorp" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ TÀI KHOẢN</p>
            <Link to="/addaccount" style={{ textDecoration: "none" }}>
              <li>
                <AddIcon className="icon" />
                <span>Thêm tài khoản</span>
              </li>
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <ReorderIcon className="icon" />
                <span>Danh sách tài khoản</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ SẢN PHẨM </p>
            <Link to="/addproduct" style={{ textDecoration: "none" }}>
              <li>
                <AddIcon className="icon" />
                <span>Thêm sản phẩm</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <InsertChartIcon className="icon" />
                <span>Dòng sản phẩm</span>
              </li>
            </Link>
            <Link to="/product" style={{ textDecoration: "none" }}>
              <li>
                <GridMenuIcon className="icon" />
                <span>Thống kê sản phẩm</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ BẢO HÀNH</p>
            <Link to="/guarantee" style={{ textDecoration: "none" }}>
              <li>
                <ConstructionIcon className="icon" />
                <span>Bảo hành sản phẩm</span>
              </li>
            </Link>
            <p className="title">NGƯỜI DÙNG</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin cá nhân</span>
            </li>
            <Link to="#" onClick={logoutHandler}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Đăng xuất</span>
              </li>
            </Link>
          </ul>
        )}
        {user.isStore && (
          <ul>
            <p className="title">TRANG CHÍNH</p>
            <Link to="/bigcorp" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ SẢN PHẨM </p>
            <Link to="/storeproducts" style={{ textDecoration: "none" }}>
              <li>
                <WarehouseIcon className="icon" />
                <span>Kho hàng</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ ĐƠN HÀNG</p>
            <Link to="/addorder" style={{ textDecoration: "none" }}>
              <li>
                <AddIcon className="icon" />
                <span>Thêm đơn hàng</span>
              </li>
            </Link>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <li>
                <ReorderIcon className="icon" />
                <span>Danh sách đơn hàng</span>
              </li>
            </Link>
            <p className="title">SẢN PHẨM BẢO HÀNH</p>
            <Link to="/addguarantee" style={{ textDecoration: "none" }}>
              <li>
                <AddIcon className="icon" />
                <span>Tạo đơn bảo hành</span>
              </li>
            </Link>
            <Link to="/guarantee" style={{ textDecoration: "none" }}>
              <li>
                <ReorderIcon className="icon" />
                <span>Danh sách sản phẩm bảo hành</span>
              </li>
            </Link>
            <p className="title">NGƯỜI DÙNG</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin cá nhân</span>
            </li>
            <Link to="#" onClick={logoutHandler}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Đăng xuất</span>
              </li>
            </Link>
          </ul>
        )}
        {user.isFactory && (
          <ul>
            <p className="title">TRANG CHÍNH</p>
            <Link to="/bigcorp" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ SẢN PHẨM </p>
            <Link to="/factoryproducts" style={{ textDecoration: "none" }}>
              <li>
                <WarehouseIcon className="icon" />
                <span>Kho hàng</span>
              </li>
            </Link>
            <Link to="/addtostorage" style={{ textDecoration: "none" }}>
              <li>
                <AddIcon className="icon" />
                <span>Thêm sản phẩm vào kho</span>
              </li>
            </Link>
            <Link to="/addconsignment" style={{ textDecoration: "none" }}>
              <li>
                <ImportExportIcon className="icon" />
                <span>Xuất sản cho đại lý</span>
              </li>
            </Link>
            <p className="title">SẢN PHẨM LỖI</p>
            <Link to="/guarantee" style={{ textDecoration: "none" }}>
              <li>
                <ReorderIcon className="icon" />
                <span>Danh sách sản phẩm lỗi</span>
              </li>
            </Link>
            <p className="title">NGƯỜI DÙNG</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin cá nhân</span>
            </li>
            <Link to="#" onClick={logoutHandler}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Đăng xuất</span>
              </li>
            </Link>
          </ul>
        )}
        {user.isService && (
          <ul>
            <p className="title">TRANG CHÍNH</p>
            <Link to="/bigcorp" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">QUẢN LÍ SẢN PHẨM </p>
            <Link to="/productline" style={{ textDecoration: "none" }}>
              <li>
                <ConstructionIcon className="icon" />
                <span>Sản phẩm cần bảo hành</span>
              </li>
            </Link>
            <Link to="/returnproduct" style={{ textDecoration: "none" }}>
              <li>
                <KeyboardReturnIcon className="icon" />
                <span>Hoàn trả sản phẩm lỗi </span>
              </li>
            </Link>
            <p className="title">NGƯỜI DÙNG</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin cá nhân</span>
            </li>
            <Link to="#" onClick={logoutHandler}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Đăng xuất</span>
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
