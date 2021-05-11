const Card3 = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 ">
      <div className="p-4  h-full ">
        {data && (
          <div className="p-4 h-full group border cursor-pointer rounded-md border-gray-100 transition duration-200 transform hover:shadow-md ">
            <h1 className="text-3xl border-b-4  border-white font-bold transition duration-200 py-1 transform group-hover:border-gray-200 group-active:border-blue-300">
              {data.title}
            </h1>
            <p className="italic mb-2 text-gray-700">{data.caption}</p>
            <p className="text-sm text-gray-700">{data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card3;
