const UsefulLinks = ({ data }) => {
  return (
    <div className="flex flex-wrap">
      {data.links?.map((link) => (
        <div key={link.id} className="w-1/3 p-2">
          <a href={link.link} target="_blank">
            <div className="border-gray-200 border text-sm text-gray-700  p-2 rounded-md shadow cursor-pointer transition duration-200 transform hover:shadow-md hover:bg-gray-100">
              {link.title}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default UsefulLinks;
