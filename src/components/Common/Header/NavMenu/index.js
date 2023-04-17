import NavItem from "./NavItem";

export default function NavMenu() {
  return (
    <div className="flex items-center gap-x-8">
      {["Home", "Blog", "About", "Contact"].map((item) => (
        <NavItem
          key={item}
          link={`/${item == "Home" ? "" : item.toLowerCase()}`}
          text={item}
        />
      ))}
    </div>
  );
}
