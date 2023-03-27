import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import '../styles/main.scss';
import '../styles/_app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.css";
// import "aos/dist/aos.css";

const xQuizApp = ({ Component, pageProps }) => {


  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
};

export default xQuizApp;
