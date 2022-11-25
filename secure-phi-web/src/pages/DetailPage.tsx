import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProcessedImage from "../components/ProcessedImage";
import Spinner from "react-bootstrap/Spinner";
import DUMMY_IMAGE from "../assets/images/test.jpg";
import { config } from "../config";
import { RiFileDownloadFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";

const DetailPage: FC = () => {
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
        `${config.SERVER_URL}/uploadReturn/${fileName}`
      );
      const responseData = await response.json();
      console.log(responseData);

      setProcessedImage({
        imageURL: `http://127.0.0.1:5000/${responseData}`,
        isResponseComplete: true,
      });
    };
    fetchProcesssedImage();
  }, []);

  return (
    <>
      <div>
        {fileName}
        {processedImage.isResponseComplete ? (
          <>
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
          </>
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
