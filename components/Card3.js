import { useRouter } from "next/router";
const Card3 = ({ data }) => {
  const router = useRouter();
  return (
    <div className="w-full md:w-1/2 ">
      <div className="p-4  h-full ">
        {data && (
          <div onClick={() => router.push(`/portfolio/${data.id}`)} className="p-4 h-full group border cursor-pointer rounded-md border-gray-100 transition duration-200 transform hover:shadow-md ">
            <h1 className="text-3xl border-b-2  border-white font-bold transition duration-200 py-1 transform group-hover:border-gray-200 group-active:border-blue-300">
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
