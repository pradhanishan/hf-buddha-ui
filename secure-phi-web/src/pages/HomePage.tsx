import { FC } from "react";
import InputContent from "../components/InputContent";
import classes from "./home-page.module.css";

const HomePage: FC = () => {
  return (
    <div className={classes["home-page"]}>
      <InputContent />
    </div>
  );
};

export default HomePage;
