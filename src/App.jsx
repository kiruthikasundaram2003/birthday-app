import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Countdown from "./pages/Countdown.jsx";
import Gallery from "./pages/Gallery.jsx";
import Reasons from "./pages/Reasons.jsx";
import Media from "./pages/Media.jsx";
import Quiz from "./pages/Quiz";
import Surprise from "./pages/Surprise";
import Login from "./pages/Login";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Countdown />} />
        {/* Login page only */}
        <Route path="/login" element={<Login />} />

        {/* Pages with navbar */}
        <Route element={<MainLayout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/media" element={<Media />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/surprise" element={<Surprise />} />

        </Route>
        <Route path="*" element={<Countdown />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
      />
    </>
  )
}

export default App;