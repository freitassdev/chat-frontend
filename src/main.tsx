import { createRoot } from "react-dom/client";
import { App, Chat, Login, Signup } from "./pages/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-dark-teal/theme.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import './index.css';

const rootElement: HTMLElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(
  <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  </Router>
)