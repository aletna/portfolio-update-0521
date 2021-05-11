import Card2 from "./Card2";

const HomeCardSection = ({ title, card }) => {
  return (
    <div className="pb-4 w-full md:w-4/5 lg:w-3/5 mx-auto">
      <h1 className="text-2xl font-bold text-center">
        <span className="border-b-4 border-blue-500">{title}</span>
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap mt-5">
        {card?.map((c,idx) => (
          <div key={idx} className="w-full md:w-1/2 p-2">
            <Card2 title={c.title} desc={c.desc} url={c.url} width={c.width}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSection;
