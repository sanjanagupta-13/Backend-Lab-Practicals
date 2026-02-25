"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    const res = await fetch("/api/users");
    const raw = await res.json();

    setData(raw);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col-20">ID</th>
            <th scope="col-10">Name</th>
            <th scope="col-80">Email</th>
            <th scope="col-10">Role</th>
            <th scope="col-10">passworld</th>
            <th scope="col-80">create time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any) => {
            return (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.password}</td>
                <td>{user.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default page;