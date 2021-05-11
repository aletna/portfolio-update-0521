const HomeAbout = () => {
  return (
    <div className="container mt-5 mx-auto">
      <div className="w-full p-4 ">
        <div className=" text-gray-700 w-3/5 mx-auto p-5 border rounded-md">
          <div className="mb-2 ">
            Hi, thanks for stopping by! I'm Dennis, a music producer and
            computer scientist. In May 2021, I will graduate from SF-based
            Minerva Schools at KGI with a Bachelor of Science, double majoring
            in Computer Science & Business.
          </div>
          <div className="mb-2">
            While I do have a passion for working with large amounts of data, I
            spend just as much of my time thinking about creating. A growing
            curiosity for the product side led me down the path of teaching
            myself both Music Production and Web Development over the past
            decade. I am fascinated by the idea of building something that
            others are then able to use and enjoy, making their lives easier
            along the way. Building my latest project{" "}
            {/* <Link href="https://www.synthfeed.com"> */}
            <a className="link" target="_blank">
              SynthFeed
            </a>
            {/* </Link> */}, a service where experienced music producers can
            provide feedback to upcoming producers for a fee, nicely tied
            together my passions. I was the solo engineer on the project and
            also worked on outreach and strategy alongside my co-founder, who
            designed the platform.
          </div>
          <div>
            As of now I have lived, worked and studied in Germany 🇩🇪, South
            Africa 🇿🇦, India 🇮🇳, South Korea 🇰🇷, Colombia 🇨🇴, Mexico 🇲🇽,
            Argentina 🇦🇷 and the United States 🇺🇸, which allowed me to adapt to
            a diverse set of environments.{" "}
            {/* I'm confident that my combined experience in the music
        industry, as a software engineer, and also blockchain-based development
        experience (solidity + web3.js) make me a great fit for the Audius team. */}
            Through my constant exposure to change, I have learned not to shy
            away from learning new skillsets whenever needed, and after having
            explored a few different industries, it has become increasingly
            important to me to find a team or company that aligns with my
            mission.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
