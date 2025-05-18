<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import Header from  "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import imagelogo from "./logo.png"; // Import the image


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
=======
import React from "react";
import ReactDOM from "react-dom/client";
import Header from  "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import imagelogo from "./logo.png"; // Import the image


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
>>>>>>> c89fe74f1cb371af8271a367585aade2501a6136
