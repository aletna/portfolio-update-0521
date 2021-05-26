import Head from "next/head";
import { useRouter } from "next/router";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
const about = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Dennis Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto my-5">
        <div className="flex w-full h-full md:w-4/5 lg:w-3/5 mx-auto">
          <div className="w-1/4   pl-4 ">
            <ArrowNarrowLeftIcon
              onClick={() => router.back()}
              className="h-10 w-10 ml-2 cursor-pointer p-2 rounded-full border border-white transition duration-150 transform hover:scale-110 hover:bg-gray-100 active:border-gray-300"
            />
          </div>
          <div className="w-2/4">
            <h1 className="text-2xl mb-5 font-bold text-center ">
              <span className="border-b-4 border-blue-500 ">About Me</span>
            </h1>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="w-full md:w-4/5 lg:w-3/5  mx-auto rounded-md text-gray-700 px-7 py-2 ">
            Hi, thanks for stopping by! I'm Dennis, a music producer and
            computer scientist. In May 2021, I will graduate from SF-based
            Minerva Schools at KGI with a Bachelor of Science, double majoring
            in Computer Science & Business.
          </div>
          <div className="w-full md:w-4/5 lg:w-3/5  mx-auto rounded-md text-gray-700 px-7 py-2 ">
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
          <div className="w-full md:w-4/5 lg:w-3/5  mx-auto rounded-md text-gray-700 px-7 py-2 ">
            As of now I have lived, worked and studied in Germany 🇩🇪, South
            Africa 🇿🇦, India 🇮🇳, South Korea 🇰🇷, Colombia 🇨🇴, Mexico 🇲🇽,
            Argentina 🇦🇷 and the United States 🇺🇸, which allowed me to adapt to
            a diverse set of environments. Through my constant exposure to change, I have learned not to shy
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

export default about;
