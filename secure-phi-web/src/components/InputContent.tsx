import { FC, useState } from "react";
import classes from "./input-content.module.css";
import Button from "react-bootstrap/Button";
import { IoIosQrScanner } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/rtk";
import { config } from "../config";

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
  const handleSubmitFile = async (event: any) => {
    event.preventDefault();

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     file: fileInput.content,
    //     fileName: fileInput.imageName,
    //   }),
    // };

    // const response = await fetch(`${config.SERVER_URL}/upload`, requestOptions);
    // const responseData = await response.json();

    // if (responseData.ok) {
    //   navigate("/detail", {
    //     state: { fileName: fileInput.imageName.toString() },
    //   });
    // } else {
    //   // redirect to error
    // }

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
      <label className={classes["input-label"]}>
        <input
          type="file"
          accept="image/jpeg,application.pdf,image/png"
          className="mb-3"
          onChange={handleFileUpload}
        />
      </label>
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
