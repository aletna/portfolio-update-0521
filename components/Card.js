import Emoji from "./Emoji";
const Card = ({ title, desc, links, emoji }) => {
  return (
    <div className=" border p-5 h-full border-gray-200  rounded-md shadow transition duration-200 transform hover:shadow-lg ">
      <h1 className="font-bold text-lg mb-2 text-gray-800">
        {title}
        {emoji && <Emoji symbol={emoji.symbol} label={emoji.label} />}
      </h1>
      <p className="text-sm text-gray-700 mb-2">{desc}</p>
      <ul className="text-sm pb-5 ">
        {links?.map((link) => (
          <li key={link.id} className=" link ">
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
