import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Widget = ({ type }) => {
  const user_count = useFetch(`/admin/countUser`).data;
  const order_count = useFetch(`/admin/countOrder`).data;
  const monthly_count = useFetch(`/admin/countIncome`).data;
  let total_count = 0;
  monthly_count.forEach((monthly) => {
    total_count += monthly.total;
  });
  const _count = 0;
  let _data;

  switch (type) {
    case "user":
      _data = {
        title: "USERS",
        count: user_count,
        isMoney: false,
        link: (
          <Link to="/users" style={{ textDecoration: "none" }}>
            <p>See all users</p>
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      _data = {
        title: "ORDERS",
        count: order_count,
        isMoney: false,
        link: (
          <Link to="/product" style={{ textDecoration: "none" }}>
            <p>See all order</p>
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      _data = {
        title: "EARNINGS",
        count: total_count,
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    // case "balance":
    //   data = {
    //     title: "BALANCE",
    //     isMoney: true,
    //     link: "See details",
    //     icon: (
    //       <AccountBalanceWalletOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(128, 0, 128, 0.2)",
    //           color: "purple",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    // default:
    //   break;
  }

  return (
    <div className="widget">
      <div className="left_widget">
        <span className="title">{_data.title}</span>
        <span className="counter">
          {_data.count} {_data.isMoney && "vnđ"}
        </span>
        <span className="link">{_data.link}</span>
      </div>
      <div className="right_widget">{_data.icon}</div>
    </div>
  );
};

export default Widget;
