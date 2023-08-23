import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <section>
        <h1>404</h1>
        <p>Chinguen a su madre, pagina equivocada</p>
        <Link href="/">Volver</Link>
    </section>
  )
}

export default notFound