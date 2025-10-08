import HamburgerMenu from "./navigation/hamburgerMenu";
import Logo from "./navigation/logo";

export default function Header() {
  return (
    <header className="bg-indigo-700 lg:hidden">
      <section className="relative flex flex-row justify-between px-8">
        <Logo />
        <HamburgerMenu />
      </section>
    </header>
  );
}
