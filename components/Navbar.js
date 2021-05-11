import Avatar from "./Avatar";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-10 bg-white shadow p-3  text-sm text-gray-700">
      <div className="flex w-full container mx-auto justify-between">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="linkNav ">Code</p>
          {/* <p className="linkNav">About</p> */}
          {/* <p className="linkNav">Store</p> */}
        </div>
        {/* Center  */}
        <div
          className="flex  items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Avatar url="https://firebasestorage.googleapis.com/v0/b/dennis-portfolio-942f1.appspot.com/o/dennis.JPG?alt=media&token=bb846abf-f773-459e-ad0a-4e9b531406ef" />
          {/* <Sidenav /> */}
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="linkNav">Music</p>
          {/* <p className="linkNav ">Code</p> */}

          {/* Icon */}
          {/* <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
