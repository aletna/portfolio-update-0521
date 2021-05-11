import Head from "next/head";
import Card3 from "../../components/Card3";
import SynthFeed from "../../components/PortfolioObjects/SynthFeed";
import EtherCup from "../../components/PortfolioObjects/EtherCup";
import ChatBot from "../../components/PortfolioObjects/ChatBot";
import CovidAnalysis from "../../components/PortfolioObjects/CovidAnalysis";
import Odera from "../../components/PortfolioObjects/Odera";
import Cobo from "../../components/PortfolioObjects/Cobo";
const index = () => {
  return (
    <div>
      <Head>
        <title>Dennis Portfolio</title>
        <meta name="description" content="Some portfolio items highlighted." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mt-5">
      <h1 className="text-2xl mb-5 font-bold text-center ">
        <span className="border-b-4 border-blue-500 ">Portfolio</span>
      </h1>
        <div className="flex flex-wrap flex-col md:flex-row">
          <Card3 data={SynthFeed}/>
          <Card3 data={EtherCup}/>
          <Card3 data={ChatBot} />
          <Card3 data={CovidAnalysis}/>
          <Card3 data={Odera} />
          <Card3 data={Cobo} />
          
          
        </div>
      </div>
    </div>
  );
};

export default index;
