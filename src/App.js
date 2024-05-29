import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeButton from "./components/ThemeButton";
import Header from "./components/Header";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import Town from "./pages/Town";
import Raid from "./pages/Raid";
import { Routes, Route} from "react-router-dom";

const NavRoutes = () => {
  return (
      <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/townevents" element={<Town />}></Route>
          <Route path="/raidevents" element={<Raid />}></Route>
      </Routes>
  )
}


function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <div className="wrapper">
        <div className="col-1"><Navi /><ThemeButton /></div>
        <div className="col-2">
          <Header />
          <main className="content">
          <article>
            <NavRoutes />
          </article>
          </main>
          <footer>Footer</footer>
        </div>   
      </div>
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
