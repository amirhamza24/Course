import { useState } from "react";
import reactLogo from "./asset/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="background-body">
            <div className="App w-10/12 py-5 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default App;
