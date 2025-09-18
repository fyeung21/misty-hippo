import GeneralNav from "./navigation/generalNav";
import Logo from "./navigation/logo";
import SeasonNav from "./navigation/seasonNav";

export default function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-between">
        <Logo />
        <SeasonNav />
        <GeneralNav />
      </nav>
    </header>
  );
}
