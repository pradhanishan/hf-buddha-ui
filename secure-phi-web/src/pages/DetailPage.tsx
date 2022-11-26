import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProcessedImage from "../components/ProcessedImage";
import Spinner from "react-bootstrap/Spinner";
import { config } from "../config";
import { useNavigate } from "react-router-dom";
import classes from "./detail-page.module.css";
import Button from "react-bootstrap/Button";
import { MdKeyboardBackspace, MdCropOriginal } from "react-icons/md";
import { GiDualityMask } from "react-icons/gi";
import { MdOutlineCompare } from "react-icons/md";

const DetailPage: FC = () => {
  const navigate = useNavigate();
  const data: {
    hash: any;
    key: any;
    pathname: any;
    search: any;
    state: {
      fileName: string;
    };
  } = useLocation();
  const fileName = data.state === null ? "" : data.state.fileName;

  const [displayMode, setDisplayMode] = useState<{ original: boolean }>({
    original: false,
  });

  const [compareMode, setCompareMode] = useState<boolean>(false);

  const toggleDisplayOriginalImageMode = () => {
    setCompareMode(false);
    setDisplayMode({ original: true });
  };

  const toggleDisplayMaskedImageMode = () => {
    setCompareMode(false);
    setDisplayMode({ original: false });
  };

  const toggleCompareMode = () => {
    setCompareMode(true);
  };

  //
  const [originalImage, setOriginalImage] = useState<{
    imageURL: string;
    isResponseComplete: boolean;
  }>({
    imageURL: "",
    isResponseComplete: false,
  });

  // manage state of processed image
  const [processedImage, setProcessedImage] = useState<{
    imageURL: string;
    isResponseComplete: boolean;
  }>({
    imageURL: "",
    isResponseComplete: false,
  });

  // send API request to fetch processed image, pass image name as parameter
  useEffect(() => {
    const fetchProcesssedImage = async () => {
      // SEND API REQUEST HERE

      const response = await fetch(
        // `${config.SERVER_URL}/uploadReturn/outing.jpg`
        `${config.SERVER_URL}/uploadReturn/${fileName}`
      );
      const responseData = await response.json();

      console.log(responseData);

      if (responseData.response_code === 200) {
        setProcessedImage({
          imageURL: `http://127.0.0.1:5000/${responseData.path}`,
          isResponseComplete: true,
        });
      } else {
        navigate("invalid");
      }
    };
    fetchProcesssedImage();
  }, []);

  useEffect(() => {
    const fetchProcesssedImage = async () => {
      // SEND API REQUEST HERE

      const response = await fetch(
        // `${config.SERVER_URL}/uploadReturn/outing.jpg`
        `${config.SERVER_URL}/uploadReturn/original_${fileName}`
      );
      const responseData = await response.json();

      if (responseData.response_code === 200) {
        setOriginalImage({
          imageURL: `http://127.0.0.1:5000/${responseData.path}`,
          isResponseComplete: true,
        });
      } else {
        navigate("invalid");
      }
    };
    fetchProcesssedImage();
  }, []);

  return (
    <>
      <div>
        <div className={classes["detail-page"]}>
          {processedImage.isResponseComplete &&
          originalImage.isResponseComplete ? (
            <div className={classes["detail-page"]}>
              <h5 className="mb-3">{fileName}</h5>
              <div className={classes["buttons-container"]}>
                {!displayMode.original && (
                  <Button
                    className={classes["details-page-button"]}
                    variant="secondary"
                    onClick={toggleDisplayOriginalImageMode}
                  >
                    Show original <MdCropOriginal />
                  </Button>
                )}
                {!compareMode && (
                  <Button
                    className={classes["details-page-button"]}
                    variant="secondary"
                    onClick={toggleCompareMode}
                  >
                    Compare <MdOutlineCompare />
                  </Button>
                )}
                {displayMode.original && (
                  <Button
                    className={classes["details-page-button"]}
                    variant="secondary"
                    onClick={toggleDisplayMaskedImageMode}
                  >
                    Show masked <GiDualityMask />
                  </Button>
                )}
                <Button
                  className={classes["details-page-button"]}
                  variant="danger"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  go back <MdKeyboardBackspace />
                </Button>
              </div>
              {!compareMode && displayMode.original && (
                <>
                  <h5>Original Image</h5>
                  <ProcessedImage
                    imageName="ORIGINAL"
                    imageURL={originalImage.imageURL}
                  />
                </>
              )}
              {!compareMode && !displayMode.original && (
                <>
                  <h5>Processed Image</h5>
                  <ProcessedImage
                    imageName={fileName}
                    imageURL={processedImage.imageURL}
                  />
                </>
              )}

              {compareMode ? (
                <>
                <h5>Compared images</h5>
                  <ProcessedImage
                    imageName="ORIGINAL"
                    imageURL={originalImage.imageURL}
                  />
                  <ProcessedImage
                    imageName={fileName}
                    imageURL={processedImage.imageURL}
                  />
                </>
              ) : null}
            </div>
          ) : (
            <div>
              <p>Loading....</p>
              <Spinner animation="grow" variant="light" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
