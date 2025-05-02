import Head from "next/head";
import Header from "../components/Header/Header"
import PartnerWithGulfaar from "../components/PartnerWithUs/PartnerContainer";
import PartnerUs from "../components/PartnerWithUs/PartnerUS";
import PartnershipOpportunities from "../components/PartnerWithUs/PartnerShipOpertunitys";
import PartnershipTypes from "../components/PartnerWithUs/PartnerType";
import SuccessNetwork from "../components/PartnerWithUs/SuccessNetwork";
import WhyPartnerWithGulfaar from "../components/PartnerWithUs/WhyPartner";
import Footer from "../components/Footer/Footer";





const PartnerPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Cookies</title>
          </Head>
          <Header title={"Partner With Us"} subtitle={"Grow, and Succeed with Gulfaar"} />
          <div className="flex-1 flex  flex-col items-center justify-center ">
                <PartnerWithGulfaar />
                <WhyPartnerWithGulfaar/>
                <PartnerUs />
                <PartnershipOpportunities />
                <PartnershipTypes />
              
                <Footer/>
          </div>
        </div>
      );
    };

export default PartnerPage;
