import Avatar from "./Avatar";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-10 bg-white shadow p-3  text-sm text-gray-700">
      <div className="flex w-full container mx-auto justify-between">
        {/* Left */}
        <div className="flex w-1/4 space-x-4 items-center">
          <p className="linkNav" onClick={() => router.push("/portfolio")}>
            Dev Portfolio
          </p>
          {/* <p className="linkNav">About</p> */}
          {/* <p className="linkNav">Store</p> */}
        </div>
        {/* Center  */}
        <div
          className="flex w-2/4 items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="mx-auto">
            <Avatar url="https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/dennis.JPG?alt=media&token=bb846abf-f773-459e-ad0a-4e9b531406ef" />
            {/* <Sidenav /> */}
          </div>
        </div>
        {/* Right */}
        <div className="flex w-1/4 space-x-4  items-center">
          <div className="ml-auto">
            <p className="linkNav">
              <a href="https://aletna.me" target="_blank">
                Music Portfolio
              </a>
            </p>
            {/* <p className="linkNav ">Code</p> */}
          </div>

          {/* Icon */}
          {/* <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
