import classes from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { useAppSelector } from "./hooks/rtk";

function App() {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div>
      <Header />
      <main className={theme.darkMode ? classes.app : classes["app-light"]}>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
