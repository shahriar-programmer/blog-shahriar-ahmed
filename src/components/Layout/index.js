import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Widget from "../Common/Widget";
import { inter } from "../Utils/font";
import Container from "./Container";

export default function Layout({ children, className }) {
  return (
    <section className={`${inter.className} text-grayWhite`}>
      <Header />
      <div className={"bg-grayDark py-4 md:p-0"}>
        <Container
          className={
            "p-0 md:p-4 md:py-8"
          }
        >
          <div className="flex flex-col justify-between w-full min-h-screen gap-5 md:flex-row">
            {children}
            <Widget />
          </div>
        </Container>
      </div>
      <Footer />
    </section>
  );
}
