import Head from "next/head";
import Header from '../components/Header/Header'
import Footer from "../components/Home/Footer";
import EmploymentLabourCompliance from "../components/Regulations/Employment";
import DataProtectionSection from "../components/Regulations/DataProtection";
import EthicalSection from "../components/Regulations/EthicalRecuirment";
import IndustryRegulations from "../components/Regulations/IndustryRegulations";
import CodeOfConduct from "../components/Regulations/CodeOfConduct";
import LegalResponsibilities from "../components/Regulations/LeagalResponsbility";
import ComplianceConsequences from "../components/Regulations/ComplianceConsequences";
import ReportViolations from "../components/Regulations/ReportViolations";







const RegulationsPage = () => {
    return (
        <div className="flex flex-col w-full  min-h-screen">
            <Head>
            <title>Regulations</title>
          </Head>
          <Header title={"Regulations"} subtitle={"At Gulfaar, we are committed to legal compliance,"} />
          <div className="flex-1 flex  flex-col items-center justify-center  w-full">
            <EmploymentLabourCompliance />
            <DataProtectionSection />
            <EthicalSection />
            <IndustryRegulations />
            <CodeOfConduct />
            <LegalResponsibilities />
            <ComplianceConsequences />
            <ReportViolations />
            <Footer />
          </div>
        </div>
      );
    };

export default RegulationsPage;
