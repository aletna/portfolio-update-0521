import Head from "next/head";
import { useRouter } from "next/router";
import SynthFeed from "../../../components/PortfolioObjects/SynthFeed";
import EtherCup from "../../../components/PortfolioObjects/EtherCup";
import ChatBot from "../../../components/PortfolioObjects/ChatBot";
import CovidAnalysis from "../../../components/PortfolioObjects/CovidAnalysis";
import Odera from "../../../components/PortfolioObjects/Odera";
import Cobo from "../../../components/PortfolioObjects/Cobo";
import Image from "next/image";
import UsefulLinks from "../../../components/UsefulLinks";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

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
              content="Dennis Portfolio"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="container mx-auto my-5">
            <div className="flex w-full h-full md:w-4/5 lg:w-3/5 mx-auto">
              <div className="w-1/4   pl-4 "><ArrowNarrowLeftIcon onClick={() => router.back()} className="h-10 w-10 ml-2 cursor-pointer p-2 rounded-full border border-white transition duration-150 transform hover:scale-110 hover:bg-gray-100 active:border-gray-300" /></div>
              <div className="w-2/4">
                <h1 className="text-2xl mb-5 font-bold text-center ">
                  <span className="border-b-4 border-blue-500 ">
                    {data.title}
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center mt-10 ">
              <Image
                className="rounded-md"
                src={data.mainImage}
                width={200}
                height={200}
              />
            </div>
            <>
              <h2 className="w-full md:w-4/5 lg:w-3/5  mx-auto text-gray-900  text-xl font-bold px-7 pb-2 mt-5">
                Overview
              </h2>
              <div className="w-full md:w-4/5 lg:w-3/5  mx-auto rounded-md border-l-2 text-gray-700 px-7 py-4 ">
                {data.abstract}
              </div>
            </>

            <>
              <h2 className="w-full md:w-4/5 lg:w-3/5  mx-auto text-gray-900  text-xl font-bold px-7 pb-2 mt-5">
                Useful Links
              </h2>
              <div className="w-full md:w-4/5 lg:w-3/5  mx-auto rounded-md text-gray-700 px-7 pb-2 ">
                <UsefulLinks data={data} />
              </div>
            </>
            {data.myRole && (
              <>
                <h2 className="w-full md:w-4/5 lg:w-3/5  mx-auto text-gray-900  text-xl font-bold px-7 pb-2 mt-5">
                  My Role
                </h2>
                <div className="w-full md:w-4/5 lg:w-3/5  mx-auto rounded-md border-l-2 text-gray-700 px-7 py-4 ">
                  {data.myRole}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
