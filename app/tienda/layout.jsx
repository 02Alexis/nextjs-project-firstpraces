import Link from "next/link";

export const metadata = {
  title: 'Store',
  // description: 'Generate by Next.js',
  // keywords: "tienda, online, ecomerce"
}

function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h1>seccion tienda</h1>
        <ul>
          <li>
            <Link href="/tienda/producto">Productos</Link>
          </li>
          {/* <li>
            <Link href="/about">About</Link>
          </li> */}
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TiendaLayout;
