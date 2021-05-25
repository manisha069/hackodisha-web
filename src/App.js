import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Footer from './components/footer/footer'
import "./App.css";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";

const loadercss = css`
 display: block;
 padding-top: 560px;
 margin-left: 48%;
 text-align: center;
`

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    }, 4000)
  }, [])

  return (
      loading ?
        <HashLoader
         color={"#ff0000"}
         loading={loading}
         css={loadercss}
         size={80}
         />

      :
      <Router>
        <div className="App">
          <Navbar />
          <div className="main">
            <Route path="/" exact component={Main} />
          </div>
        <MessengerCustomerChat
          pageId="104646555139813"
          appId="1639085279814437"
          themeColor="#b20000"
        />
        <Footer/>
        </div>
      </Router>

  );
}

export default App;