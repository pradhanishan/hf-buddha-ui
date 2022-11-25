import { FC, useState } from "react";
import classes from "./input-content.module.css";
import Button from "react-bootstrap/Button";
import { IoIosQrScanner } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/rtk";
import { config } from "../config";
import { constants } from "fs/promises";

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

    const file = fileInput.content;
    if (fileInput.content != null) {
      const data = new FormData();
      data.append("file_from_react", file);

      const response = await fetch(`${config.SERVER_URL}/upload`, {
        method: "POST",
        body: data,
      });

      const responseData = await response.json();

      console.log(responseData);

      if (responseData.ok) {
        navigate("/detail", {
          state: { fileName: fileInput.imageName.toString() },
        });
      } else {
        navigate("/invalid");
        // redirect to error
      }
    }
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
