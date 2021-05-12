import Head from "next/head";
import { useRouter } from "next/router";
import SynthFeed from "../../../components/PortfolioObjects/SynthFeed";
import EtherCup from "../../../components/PortfolioObjects/EtherCup";
import ChatBot from "../../../components/PortfolioObjects/ChatBot";
import CovidAnalysis from "../../../components/PortfolioObjects/CovidAnalysis";
import Odera from "../../../components/PortfolioObjects/Odera";
import Cobo from "../../../components/PortfolioObjects/Cobo";
import Image from "next/image";
const index = () => {
  const router = useRouter();
  const id = router.query.id;
  let data;

  if (id == SynthFeed.id) {
    data = SynthFeed;
  }
  if (id == EtherCup.id) {
    data = EtherCup;
  }
  if (id == ChatBot.id) {
    data = ChatBot;
  }
  if (id == CovidAnalysis.id) {
    data = CovidAnalysis;
  }
  if (id == Odera.id) {
    data = Odera;
  }
  if (id == Cobo.id) {
    data = Cobo;
  }
  return (
    <>
      {id && (
        <div>
          <Head>
            <title>{data.title} - Dennis Portfolio</title>
            <meta
              name="description"
              content="Some portfolio items highlighted."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="container mx-auto mt-5">
            <h1 className="text-2xl mb-5 font-bold text-center ">
              <span className="border-b-4 border-blue-500 ">{data.title}</span>
            </h1>
            <div className="flex justify-center mt-10 ">
              <Image
                className="rounded-md"
                src={data.mainImage}
                width={200}
                height={200}
              />
            </div>
            <div className="w-3/5  mx-auto rounded-md border-l-2 text-gray-700 p-7 mt-5">
              {data.abstract}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
