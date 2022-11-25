import { FC } from "react";
import classes from "./about-card.module.css";
import { FaReact } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { VscOutput } from "react-icons/vsc";
import { GiPyromaniac } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

interface IAboutCardProps {
  heading: string;
  description: string;
  cardType: string;
  id: number;
}

const AboutCard: FC<IAboutCardProps> = (props: IAboutCardProps) => {
  const { id, heading, description, cardType } = props;
  return (
    <div
      className={
        id === 1
          ? `${classes["about-card"]} ${classes["a-card"]}`
          : id === 2
          ? `${classes["about-card"]} ${classes["b-card"]}`
          : id === 3
          ? `${classes["about-card"]} ${classes["c-card"]}`
          : id === 4
          ? `${classes["about-card"]} ${classes["d-card"]}`
          : id === 5
          ? `${classes["about-card"]} ${classes["e-card"]}`
          : id === 6
          ? `${classes["about-card"]} ${classes["f-card"]}`
          : id === 7
          ? `${classes["about-card"]} ${classes["g-card"]}`
          : `${classes["about-card"]} ${classes["h-card"]}`
      }
    >
      <div className={classes["about-card-heading"]}>
        {id === 1 ? (
          <FaReact />
        ) : id === 2 ? (
          <IoMdQrScanner />
        ) : id === 3 ? (
          <MdPrivacyTip />
        ) : id === 4 ? (
          <VscOutput />
        ) : id === 5 ? (
          <GiPyromaniac />
        ) : id === 6 ? (
          <RiTeamFill />
        ) : id === 7 ? (
          <FaHeartbeat />
        ) : (
          <AiFillStar />
        )}
        <h5>{heading}</h5>
      </div>
            <hr/>
      <p style={{ fontStyle: "italic" }}>{description}</p>
    </div>
  );
};

export default AboutCard;
