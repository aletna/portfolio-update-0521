import Emoji from "./Emoji";
import UpdateProfessions from "./UpdateProfessions";

const IntroHeader = () => {
  return (
    <div className="text-center mt-2">
      <div className="text-4xl"><Emoji symbol="👋" label="hello" /></div>
      <h1 className=" text-4xl font-bold mt-3 text-gray-800">Hey, I'm Dennis</h1>
      <div className="mt-5 mb-3">
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
