import github from "../assets/github.svg";
export default function Footer() {
  return (
    <div className="mt-10">
      <a href="http://github.com/heberth-uh/" className="flex items-center justify-center gap-1 text-gray-500 text-sm" target="_blank">
        <img src={github} alt="github icon" className="h-5" />
        <span>heberth-uh | 2024</span>
      </a>
    </div>
  );
}
