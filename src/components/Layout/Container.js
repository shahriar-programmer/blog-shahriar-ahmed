export default function Container({ children, className }) {
  return <div className={`${className} max-w-7xl mx-auto`}>{children}</div>;
}
