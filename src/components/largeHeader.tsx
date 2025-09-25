import GeneralNav from "./navigation/generalNav";
import Logo from "./navigation/logo";
import SeasonNav from "./navigation/seasonNav";

export default function LargeHeader() {
  return (
    <header className="hidden bg-indigo-700 lg:block">
      <nav className="px-14 lg:flex lg:flex-row lg:justify-between xl:px-25">
        <Logo />
        <SeasonNav />
        <GeneralNav />
      </nav>
    </header>
  );
}
