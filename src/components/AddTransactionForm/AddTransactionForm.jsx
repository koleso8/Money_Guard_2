import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Income from "./Income/Income";
import Expense from "./Expense/Expense";

const CustomSwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb": {
        backgroundColor: "#FF868D",
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url('https://www.svgrepo.com/show/25409/minus-sign-of-a-line-in-horizontal-position.svg')`,
          backgroundSize: "18px 18px", // Розмір іконки для правого положення
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#FFB627",
    width: 32,
    height: 32,
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: 'url("https://www.svgrepo.com/show/2087/plus.svg")',
      backgroundSize: "18px 18px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,

    backgroundColor: "#E0E0E0",
    borderRadius: 20 / 2,
  },
  "&.Mui-checked .MuiSwitch-track": {
    backgroundColor: "#E0E0E0",
  },
}));

const AddTransactionForm = ({ closeModal }) => {
  const [transactionType, setTransactionType] = useState("+");

  const handleChange = (event) => {
    setTransactionType(event.target.checked ? "-" : "+");
  };

  return (
    <div>
      <h2>Add transaction</h2>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <span style={{ marginRight: "10px" }}>Income</span>
        <CustomSwitch
          checked={transactionType === "-"}
          onChange={handleChange}
        />
        <span style={{ marginLeft: "10px" }}>Expense</span>
      </div>
      {transactionType === "+" && <Income closeModal={closeModal} />}
      {transactionType === "-" && <Expense closeModal={closeModal} />}
    </div>
  );
};

export default AddTransactionForm;
