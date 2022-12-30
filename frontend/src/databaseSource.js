export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Tên tài khoản",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Số điện thoại",
    width: 230,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 230,
  },
  {
    field: "account-type",
    headerName: "Loại tài khoản",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithStatus">
          {params.row.isAdmin
            ? "Admin"
            : params.row.isFactory
            ? "Factory"
            : params.row.isStore
            ? "Store"
            : "Service"}
        </div>
      );
    },
  },
];

export const proColumns = [
  { field: "proId", headerName: "ID", width: 130 },
  {
    field: "productName",
    headerName: "Tên sản phẩm",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.productname}
        </div>
      );
    },
  },
  {
    field: "type",
    headerName: "Loại",
    width: 230,
  },
  {
    field: "priceEach",
    headerName: "Giá",
    width: 170,
  },
  {
    field: "warrantyTime",
    headerName: "TGBH",
    width: 230,
  },
];

export const orderColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "customerName",
    headerName: "Tên khách hàng",
    width: 180,
  },
  {
    field: "phoneNumber",
    headerName: "Số điện thoại",
    width: 160,
  },
  {
    field: "address",
    headerName: "Địa chỉ",
    width: 170,
  },
  {
    field: "storeId",
    headerName: "Đại lý",
    valueGetter: (params) => {
      return params.row.storeId.username;
    },
    width: 130,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 130,
  },
  // {
  //   field: "productname",
  //   headerName: "Tên sản phẩm",
  //   valueGetter: (params) => {
  //     return params.row.productId.productname;
  //   },
  //   width: 160,
  // },
  {
    field: "WarrantyTime",
    headerName: "Bảo hành(lần)",
    width: 130,
  },
];

export const stockColumns = [
  { field: "_id", headerName: "Mã kho", width: 100 },
  {
    field: "productId",
    headerName: "ID",
    valueGetter: (params) => {
      return params.row.productId.proID;
    },
    width: 130,
  },
  {
    field: "productname",
    headerName: "Tên sản phẩm",
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.productId.img ||
              "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
            }
            alt="avatar"
          />
          {params.row.productId.productname}
        </div>
      );
    },
    width: 160,
  },
  {
    field: "quantity",
    headerName: "Số lượng",
    width: 160,
  },
  {
    field: "status",
    headerName: "Trạng Thái",
    width: 170,
  },
];

export const exportColumns = [
  { field: "_id", headerName: "Mã đơn", width: 100 },
  {
    field: "productName",
    headerName: "Tên sản phẩm",
    valueGetter: (params) => {
      return params.row.productId.productname;
    },
    width: 130,
  },
  {
    field: "quantity",
    headerName: "Số lượng",
    width: 160,
  },
  {
    field: "storeId",
    headerName: "Đại lý",
    valueGetter: (params) => {
      return params.row.storeId.username;
    },
    width: 130,
  },
  {
    field: "creatAt",
    headerName: "Ngày tạo",
    width: 160,
  },
];
