import React from "react";
import PostCart from "@/components/PostCart";
import "./Posts.css"

async function loaderPost() {
  //ejecuta una petición
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //convierte los datos
  const data = await res.json();

  //ejecuta codigo asincrono
  // await new Promise((resolve) => setTimeout(resolve, 5000))

  //retorna los datos
  return data;
}
//ya no es un componente basico de react
//es un componente que esta procesando codigo asyncrono
//para procesarolo un servido lo debe de ejecutar, osea un componente del lado del servidor
//Renderizado usando react server component
async function PostPage() {
  //llamamos la funcion 'loadPost'
  const posts = await loaderPost();
  //   console.log(posts);

  return (
    <div className="grid">
      <h1>PostPage</h1>
      {posts.map((post) => (
        <PostCart post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPage;
