import Head from "next/head";

import Card from "../components/Card";
import LeftHeader from "../components/LeftHeader";
import IntroHeader from "../components/IntroHeader";
import Sidenav from "../components/Sidenav";
import HomeOverview from "../components/HomeOverview";
import HomeAbout from "../components/HomeAbout";
import { BriefcaseIcon } from "@heroicons/react/solid";
import Emoji from "../components/Emoji";
import Card2 from "../components/Card2";
import HomeCardSection from "../components/HomeCardSection";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Dennis Home</title>
        <meta name="description" content="Welcome to Dennis portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      {/* Main */}
      <div className="container mx-auto mt-10 bg-gray-100 py-10 rounded-md">
        <IntroHeader />
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-5">
          <span className="border-b-4 border-blue-500 ">Overview</span>
        </h1>

        <HomeOverview />
      </div>

      <div className="container mx-auto my-10 text-center  bg-gray-100 py-10 rounded-md">
        <button
          onClick={() => router.push("/portfolio")}
          className="btn bg-white"
        >
          View Portfolio
          {/* <BriefcaseIcon className="h-5 w-5 ml-2" /> */}
          <Emoji symbol="📁" label="folder" />
        </button>
      </div>

      {/* <HomeAbout /> */}
      <div className="container mx-auto py-10 mt-10 ">
        <HomeCardSection
          title="Education"
          card={[
            {
              title: "Minerva Schools at KGI",
              desc: "Highly selective undergraduate program challenging existing higher education via a curriculum that encourages active learning, engaging in projects solving real world problems with local leaders and civic partners, while living in San Francisco, Seoul, Hyderabad, Berlin, Buenos Aires, Taipei, London.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/minerva.png?alt=media&token=232bc7df-8116-48d5-ac8f-426c4aa7e27b",
              width: 308,
            },
            {
              title: "University of Cape Town",
              desc: "The University of Cape Town is the Top University on the African continent. I completed two years of Finance & Statistics studies which included Deans List and Golden Key Honor Society awards, before leaving it all behind to join Minerva.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/uct.png?alt=media&token=bef88fa2-fd2b-4bb9-8a48-844d97e31237",
              width: 100,
            },
          ]}
        />
      </div>

      <div className="container mx-auto my-10 py-10 bg-gray-100 rounded-md">
        <HomeCardSection
          title="Accomplishments"
          card={[
            {
              title: "Jalisco Talent Land Digital",
              desc: "I received a scholarship to represent my University at the largest Hackathon in the world. My team and I competed and reached the finals for the AWS Cryptocurrency award.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/jalisco.png?alt=media&token=41f420f3-0009-45c7-8abb-71cfe1d1a830",
              width: 391,
              // 770 197
            },
            {
              title: "Golden Key Honor Society",
              desc: "While studying at the University of Cape Town, I was awarded and admitted to the Golden Key International Honor Society which is reserved for the top students of their respective faculty.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/gk.png?alt=media&token=582a6e5a-a5ca-4b1f-a813-a89efee713c9",
              width: 103,
              // 300 291
            },
            {
              title: "1517 Fund Grant Recipient",
              desc: "As part of building the EtherCup NFT Smart Contracts and Collectible Auction House back in 2018, I received a grant from the San Francisco based 1517 fund.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/1517.png?alt=media&token=94c28585-ee8f-4464-8068-80771a6d0789",
              // 1224 660
              width: 185,
            },
            {
              title: "Winner: Owl City Remix Contest",
              desc: "I won an official music production remix contest hosted and judged by Owl City himself and the Co-Founder of Skio Music, Grammy Nominated DJ Swivel, who is best known for his engineering work on the BTS catalog.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/skio.jpeg?alt=media&token=05fc8fea-12a8-4101-bfe9-a06d343bff7e",
              width: 190,
              // 1200 630
            },
            {
              title: "Winner: Kenny Beats Battle with FINNEAS & Billie Eilish",
              desc: "I won a music production contest hosted by Kenny Beats. The hundres of entries were judged by himself as well as 8-time Grammy winning producer FINNEAS, alongside his sister Billie Eilish.",
              url: "https://firebasestorage.googleapis.com/v0/b/aletna.appspot.com/o/KB%20cover.png?alt=media&token=e492fe39-9606-4f97-885e-d1d32ddb82f4",
              width: 178,
              // 1224 688
            },
            {
              title: "1M+ streams on SoundCloud",
              desc: "My personal music production project (ALETNA) has received over 1 million streams on SoundCloud alone.",
              url: "https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/sc.png?alt=media&token=9c5b8517-88a5-47d2-9200-2fe3a702da79",
              width: 163,
              // 1000 612
            },
          ]}
        />
      </div>
      {/* <LeftHeader /> */}
      <div className="container mx-auto mt-20">
        <div className="text-center text-gray-700">
        Thanks for stopping by my website
        <Emoji symbol="👋" label="hello" /> - I built it with Next.js / React.js
        & TailwindCSS and deployed it on Vercel.</div>
      </div>
      {/* Footer */}
    </div>
  );
}
