import { Suspense } from "react";
import Posts from "../page";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
  // console.log(data);
}

async function page({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <hr />

      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando Publicaciones...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default page;
