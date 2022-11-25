import { FC, useState } from "react";
import classes from "./input-content.module.css";
import Button from "react-bootstrap/Button";
import { IoIosQrScanner } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/rtk";

const InputContent: FC = () => {
  const theme = useAppSelector((state) => state.theme);
  const navigate = useNavigate();
  const [fileInput, setFileInput] = useState<{
    content: any | null;
    isFileAdded: boolean;
    imageName: string;
  }>({
    content: null,
    isFileAdded: false,
    imageName: "",
  });

  const handleFileUpload = (event: any) => {
    setFileInput({
      content: event.target.files[0],
      isFileAdded: true,
      imageName: event.target.files[0].name,
    });
  };

  // handle what to do when file is submitted
  const handleSubmitFile = (event: any) => {
    event.preventDefault();
    navigate("/detail", {
      state: { fileName: fileInput.imageName.toString() },
    });
  };

  return (
    <div
      className={
        theme.darkMode
          ? classes["input-content"]
          : classes["input-content-light"]
      }
    >
      <h5>Add Image of PDF for scan</h5>
      <hr />
      <input
        type="file"
        accept="image/jpeg,application.pdf,image/png"
        className="mb-3"
        onChange={handleFileUpload}
      />
      <br />

      <Button
        variant="success"
        type="submit"
        onClick={handleSubmitFile}
        disabled={!fileInput.isFileAdded}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        Scan
        <IoIosQrScanner style={{ marginLeft: "1rem" }} />
      </Button>
    </div>
  );
};

export default InputContent;
