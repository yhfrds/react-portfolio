import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavigationBar({ toggleDarkMode }) {
  return (
    <nav className="py-10 mb-10 flex justify-between">
      <h1 className="sm:text-xl text-sm font-burtons dark:text-white">
        developedbyYudha
      </h1>
      <BsFillMoonStarsFill
        onClick={toggleDarkMode}
        className="cursor-pointer sm:text-xl text-lg dark:text-white"
      />
    </nav>
  );
}
