import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProcessedImage from "../components/ProcessedImage";
import Spinner from "react-bootstrap/Spinner";
import { config } from "../config";
import { useNavigate } from "react-router-dom";
import classes from "./detail-page.module.css";

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

  return (
    <>
      <div>
        {processedImage.isResponseComplete ? (
          <div className={classes["detail-page"]}>
            <h5 className="mb-3">{fileName} [SECURE]</h5>

            <ProcessedImage
              imageName={fileName}
              imageURL={processedImage.imageURL}
            />
            {/* <div className="pt-3">
              <Button variant="success">
                Download
                <RiFileDownloadFill size={32} />
              </Button>
            </div> */}
          </div>
        ) : (
          <div>
            <p>Loading....</p>
            <Spinner animation="grow" variant="light" />
          </div>
        )}
      </div>
    </>
  );
};

export default DetailPage;
