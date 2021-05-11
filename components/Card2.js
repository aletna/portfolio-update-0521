import Image from "next/image";
const Card2 = ({ title, desc, url, width }) => {
  return (
    <div className=" border p-5 h-full border-gray-200 bg-white rounded-md shadow hover:shadow-lg ">
      <div className="text-center py-2 mx-auto">
        {url && (
          <Image
            src={url}
            width={width*0.6}
            height={60}
            
            // className="cursor-pointer"
            // onClick={() => router.push("/")}
          />
        )}
      </div>
      <div className=" p-4">
        <div>
          <h1 className="font-bold border-b text-lg mb-2 text-gray-800">
            {title}
          </h1>
          <p className="text-sm text-gray-700 mb-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
