import Container from "../../Layout/Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <section className="w-full bg-dark">
      <Container className={"flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-0 p-4 md:py-8"}>
        <Logo />
        <NavMenu />
      </Container>
    </section>
  );
}
