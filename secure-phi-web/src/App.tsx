import classes from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Header />
      <main className={classes.app}>
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
