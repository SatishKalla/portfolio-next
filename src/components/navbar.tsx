import NavbarLinks from "./navbar-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 dark:shadow-[0_2px_6px_#0ac5b2]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          <span className="logo-tags">{`<>{`}</span>{" "}
          <span className="btn-primary-color">
            <strong>Satish Kalla </strong>
          </span>
          <span className="logo-tags">{`}</>`}</span>
        </Link>
        <NavbarLinks />
      </div>
    </nav>
  );
}
