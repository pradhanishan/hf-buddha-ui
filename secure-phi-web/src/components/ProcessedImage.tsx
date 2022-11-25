import { FC } from "react";
import classes from "./processed-image.module.css";

interface IProcessedImageProps {
  imageName: string;
  imageURL: string;
}

const ProcessedImage: FC<IProcessedImageProps> = (
  props: IProcessedImageProps
) => {
  const { imageName, imageURL } = props;
  return (
    <div className={classes["processed-image-container"]}>
      <img
        src={imageURL}
        alt={imageName}
        className={classes["processed-image"]}
      />
      <div className={classes["processed-image-details-container"]}></div>
      {/*  LIST ITEMS HERE */}
    </div>
  );
};

export default ProcessedImage;
