import { CiUser } from "react-icons/ci";

function Header() {
  return (
    <div className="flex justify-around h-14 items-center bg-[#198155]  ">
      <div className="text-2xl font-semibold text-white">LOGO</div>
      <ul className="flex justify-between gap-4 text-white">
        <li className="hover:underline hover:underline-offset-2 transition-all duration-500">
          HOME
        </li>
        <li className="hover:underline hover:underline-offset-2 transition-all duration-500">
          PRODUCTS
        </li>
        <li className="hover:underline hover:underline-offset-2 transition-all duration-500">
          CATEGORIES
        </li>
        <li className="hover:underline hover:underline-offset-2 transition-all duration-500">
          CONTACT US
        </li>
        <li className="hover:underline hover:underline-offset-2 transition-all duration-500">
          OUR PRODUCTS
        </li>
        <li className="hover:underline hover:underline-offset-2 transition-all duration-500">
          BLOG
        </li>
      </ul>
      <div className="flex justify-center items-center gap-2 ">
        <input
          type="text"
          className="rounded-xl px-2 py-1 bg-transparent border border-white "
        />
        <CiUser className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}

export default Header;
