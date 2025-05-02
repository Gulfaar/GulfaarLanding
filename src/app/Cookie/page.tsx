import Head from "next/head";
import Header from '../components/Header/Header'
import CookiesInfo from "../components/Cookie/CookieInfo";
import CookiesUsage from "../components/Cookie/CookieUsage";
import CookieChoice from "../components/Cookie/CookieChoice";
import CookieManag from "../components/Cookie/CookieManag";
import Footer from "../components/Home/Footer";




const CookiePage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Header title={"COOKIES"} subtitle={"We use cookies to improve your experience, enhance services, and deliver relevant content."} />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <CookiesInfo />
            <CookiesUsage />
            <CookieChoice />
            <CookieManag />
           
           <Footer/>
          </div>
        </div>
      );
    };

export default CookiePage;
