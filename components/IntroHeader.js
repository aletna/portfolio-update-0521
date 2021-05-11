import UpdateProfessions from "./UpdateProfessions";

const IntroHeader = () => {
  return (
    <div className="text-center">
      <h1 className=" text-4xl font-bold mt-5 text-gray-800">Hey, I'm Dennis</h1>
      <div className="mt-5 mb-6">
        <code className={`${styles.code} rounded-md py-2 px-4 text-gray-800  bg-gray-100`}>
          <em>
            I'm a <UpdateProfessions />
          </em>
        </code>
      </div>
    </div>
  );
};

const styles = {
  code: {
    /* background: #fafafa; */
    fontFamily:
      "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
  },
};

export default IntroHeader;
