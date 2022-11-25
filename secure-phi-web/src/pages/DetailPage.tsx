import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProcessedImage from "../components/ProcessedImage";
import Spinner from "react-bootstrap/Spinner";
import DUMMY_IMAGE from "../assets/images/test.jpg";

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
    imageURL: "TO BE REPLACED",
    isResponseComplete: false,
  });

  // send API request to fetch processed image, pass image name as parameter
  useEffect(() => {
    const fetchProcesssedImage = async () => {
      // SEND API REQUEST HERE
      setProcessedImage({
        imageURL: DUMMY_IMAGE,
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
          <ProcessedImage
            imageName={fileName}
            imageURL={processedImage.imageURL}
          />
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
