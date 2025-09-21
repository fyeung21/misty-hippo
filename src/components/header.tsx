import HamburgerMenu from "./navigation/hamburgerMenu";
import Logo from "./navigation/logo";

export default function Header() {
  return (
    <header className="bg-indigo-700">
      <section className="flex flex-row justify-between px-8 relative">
        <Logo />
        <HamburgerMenu />
      </section>
    </header>
  );
}
