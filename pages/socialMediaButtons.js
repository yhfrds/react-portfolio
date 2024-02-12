import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

// www.linkedin.com/in/yudha-firdaus

// const openUrl = (url) => {
// window.open(url);
// console.log("open urk is clicked");
// };

export default function LinkedInButton() {
  return (
    <div className="sm:text-5xl text-4xl flex justify-center gap-16 py-3 text-gray-600  dark:text-gray-400">
      <AiFillLinkedin
        onClick={() => {
          window.open("https://www.linkedin.com/in/yudha-firdaus", "_blank");
        }}
        className="cursor-pointer"
      />
      <AiFillGithub
        onClick={() => window.open("https://github.com/yhfrds", "_blank")}
        className="cursor-pointer"
      />
    </div>
  );
}
