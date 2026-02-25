import React from "react";
import "./page.css";


async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(
    `https://6993f568fade7a9ec0f3d89e.mockapi.io/student/${id}`,
  );
  const data = await res.json();

  return (
    <div>
      <h1>{data.name}</h1>
      <p>ID: {data.id}</p>
    <img src={data.img} alt="" style={{ height: "200px" }} />
    </div>
  );
}

export default page;