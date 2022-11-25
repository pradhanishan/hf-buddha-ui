import { FC, useState } from "react";
import classes from "./input-content.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { IoIosQrScanner } from "react-icons/io";

const InputContent: FC = () => {
  const [fileInput, setFileInput] = useState<{
    content: any | null;
    isFileAdded: boolean;
  }>({
    content: null,
    isFileAdded: false,
  });

  const handleFileUpload = (event: any) => {
    setFileInput({
      content: event.target.files[0],
      isFileAdded: true,
    });
  };

  // handle what to do when file is submitted
  const handleSubmitFile = (event: any) => {
    event.preventDefault();
    console.log(fileInput);
  };

  return (
    <div className={classes["input-content"]}>
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

      {/* <ProgressBar animated now={45} /> */}
    </div>
  );
};

export default InputContent;
