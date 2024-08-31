import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navigation />
      {/* <main className="main_container"> */}
      <ContactHeader />
      <ContactForm />
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default App;
