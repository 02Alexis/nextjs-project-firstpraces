import Link from "next/link";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar py-5">
      <h1 className="text-3xl font-bold">Next.js</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
