import { FC, useState } from "react";
import classes from "./input-content.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";

const InputContent: FC = () => {
  const [fileInput, setFileInput] = useState<{
    content: any | null;
    isFileAdded: boolean;
    fileName: string;
  }>({
    content: null,
    isFileAdded: false,
    fileName: "",
  });

  const handleFileUpload = (event: any) => {
    setFileInput({
      content: event.target.files[0],
      isFileAdded: true,
      fileName: event.target.files[0].name,
    });
  };

  // handle what to do when file is submitted
  const handleSubmitFile = (event: any) => {
    event.preventDefault();
  };

  // handle what to do when user presses
  const handleClearFileInput = () => {
    setFileInput({
      content: null,
      isFileAdded: false,
      fileName: "",
    });
  };

  return (
    <div className={classes["input-content"]}>
      <input
        type="file"
        accept="image/jpeg,application.pdf,image/png"
        className="mb-3"
        onChange={handleFileUpload}
        value={fileInput.fileName}
      />
      <br />
      {fileInput.isFileAdded && (
        <>
          <Button variant="success" type="submit" onClick={handleSubmitFile}>
            Upload
          </Button>
          <Button
            variant="danger"
            className="mx-2"
            onClick={handleClearFileInput}
          >
            Clear
          </Button>
        </>
      )}

      {/* <ProgressBar animated now={45} /> */}
    </div>
  );
};

export default InputContent;
