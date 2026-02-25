"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";


function Page() {
    const router = useRouter();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      "https://6993f568fade7a9ec0f3d89e.mockapi.io/student"
    );
    const result = await res.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Enrollment</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user: any) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.enrollment}</td>
            <td>
                <button onClick={() => router.push(`/student/${user.id}`)}>
                    View Details
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Page;
