import classes from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
