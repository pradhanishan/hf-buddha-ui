import { FC } from "react";
import classes from "./input-content.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const InputContent: FC = () => {
  return (
    <div className={classes["input-content"]}>
      <input
        type="file"
        accept="image/jpeg,application.pdf,image/png"
        className="mb-3"
      />
      <ProgressBar animated now={45} />
    </div>
  );
};

export default InputContent;
