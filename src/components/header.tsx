import GeneralNav from "./navigation/generalNav";
import Logo from "./navigation/logo";
import SeasonNav from "./navigation/seasonNav";

export default function Header() {
  return (
    <header>
      <section>
        <Logo />
        <nav>
          <SeasonNav />
          <GeneralNav />
        </nav>
      </section>
    </header>
  );
}
