import { FC } from "react";
import AboutCard from "../components/AboutCard";
import classes from "./about-page.module.css";
import { aboutData } from "../config/about-data";

const AboutPage: FC = () => {
  return (
    <>
      <h5 className="mb-3">Everything you need to know</h5>
      <div className={classes["about-container"]}>
        {aboutData.map((a) => {
          return (
            <AboutCard
              key={a.key}
              heading={a.heading}
              description={a.description}
              cardType={a.cardType}
              id={a.key}
            />
          );
        })}
      </div>
    </>
  );
};

export default AboutPage;
