import React from "react";


async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(
    `https://6993f568fade7a9ec0f3d89e.mockapi.io/faculty/${id}`,
  );
  const data = await res.json();

  return (
    <div>
    <h1>Faculty Details</h1>
      <h1>{data.name}</h1>
      <p>ID: {data.id}</p>
    <img src={data.image} alt="" style={{ height: "200px" }} />
    </div>
  );
}

export default page;