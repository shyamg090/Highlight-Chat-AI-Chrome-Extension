import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PDFChat from "./pages/PDFChat";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/pdf-chat"
          element={
            <ProtectedRoute>
              <PDFChat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
