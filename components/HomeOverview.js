import Card from "./Card";

const HomeOverview = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-between">
      <div className=" p-4 w-full md:w-1/2 lg:w-1/4">
        <Card
          title="Software Engineering"
          desc="I was the only engineer building SynthFeed, a web app for the music industry."
          emoji={{ symbol: "💻", label: "laptop" }}
          links={[
            {
              name: "SynthFeed Website",
              url: "https://synthfeed.com/",
              id: 1,
            },
            {
              name: "SynthFeed Press Release",
              url: "https://dottedmusic.com/2020/news/synthfeed-get-feedback-from-professionals/",
              id: 2,
            },
            {
              name: "SynthFeed Artist Roster",
              url: "https://drive.google.com/file/d/1WuiW2_V8bUKtrq2QmrkiuKAsnEomnrnp/view",
              id: 3,
            },
          ]}
        />
      </div>
      <div className=" p-4 w-full md:w-1/2 lg:w-1/4">
        <Card
          title="Blockchain"
          desc="I developed and launched an Ethereum-based NFT dApp back in 2018
                called EtherCup."
          emoji={{ symbol: "🌚", label: "moon" }}
          links={[
            {
              name: "Beta Demo Video",
              url: "https://www.youtube.com/watch?v=AuEoYeQi11k",
              id: 1,
            },
            {
              name: "Press Release on CryptoTicker",
              url: "https://cryptoticker.io/en/ethercup-bringing-blockchain-to-the-2018-fifa-world-cup/",
              id: 2,
            },
            {
              name: "Community oriented white paper draft",
              url: "https://drive.google.com/file/d/1p5-W6hUB9WxyhXbsA30I2-Qpzx5UGYMT/view",
              id: 3,
            },
          ]}
        />
      </div>
      <div className=" p-4 w-full md:w-1/2 lg:w-1/4">
        <Card
          title="Data Science (ML)"
          desc="I specialized in Data Science with a focus in Machine Learning &
              AI. My second major is Business and I will be graduating this
              May (2021)."
          emoji={{ symbol: "🎓", label: "university" }}
          links={[
            {
              name: "Minerva Schools at KGI",
              url: "https://www.minerva.kgi.edu/",
              id: 1,
            },
          ]}
        />
      </div>
      <div className=" p-4 w-full md:w-1/2 lg:w-1/4">
        <Card
          title="Music Production"
          desc="I'm a self taught music producer with a decade of production
              experience. I currently go by the name of ALETNA and have
              professional experience."
          emoji={{ symbol: "🎧", label: "headphones" }}
          links={[
            { name: "ALETNA Links", url: "https://aletna.me/", id: 1 },
            {
              name: "Kenny Beats Battle win w/ FINNEAS",
              url: "https://www.youtube.com/watch?v=_WRGyGVvU1s",
              id: 2,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HomeOverview;
