import { FC } from "react";
import classes from "./invalid.module.css";
import { MdError } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Invalid: FC = () => {
    const navigate=useNavigate();
  return (
    <div
      className={classes.invalid}
      style={{ color: "#f73859", fontWeight: "bold" }}
    >
      {" "}
      <div className="mb-3">
        <MdError size={32} color="#f73859" className="mx-3" /> Error Occured
      </div>
      <Button variant="outline-success" onClick={()=>navigate("/")}>Okay</Button>
    </div>
  );
};

export default Invalid;
