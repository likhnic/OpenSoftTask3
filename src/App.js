import About from "./components/About";
import Chefs from "./components/Chefs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Weekspecial from "./components/Weekspecial";


function App() {
    return (
        <div className="App">
            <div id="home">
                <Navbar />
                <Home />
            </div>
            <div id="about" className="mt-5">
                <About />
            </div>
            <div id="menu" className="mt-5">
                <Menu />
            </div>
            <div id="chefs" className="mt-5">
                <Chefs />
            </div>
            <div id="week" className="mt-5">
                <Weekspecial />
            </div>
            <div id="contact" className="mt-5">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
