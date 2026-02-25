"use client";

import React, { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
};

function Page() {
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState({ name: "" });
  const [editingID, setEditingID] = useState<number | null>(null);

  const fetchStudents = async () => {
    const res = await fetch("/api/student", { cache: "no-store" });
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async () => {
    if (!formData.name.trim()) return;

    const res = await fetch("/api/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const newStudent = await res.json();
    setStudents([...students, newStudent]);
    setFormData({ name: "" });
  };

  const deleteStudent = async (id: number) => {
    await fetch("/api/student", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setStudents(students.filter((stu) => stu.id !== id));
  };

  const startEdit = (stu: Student) => {
    setFormData({ name: stu.name });
    setEditingID(stu.id);
  };

  const updateStudent = async () => {
    if (editingID === null) return;

    const res = await fetch("/api/student", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editingID, name: formData.name }),
    });

    const updated = await res.json();

    setStudents(
      students.map((stu) =>
        stu.id === editingID ? updated : stu
      )
    );

    setEditingID(null);
    setFormData({ name: "" });
  };

  return (
    <div style={{ background: "white", minHeight: "100vh", padding: 20 }}>
      <h2>Student CRUD</h2>

      <input
        value={formData.name}
        onChange={(e) => setFormData({ name: e.target.value })}
        placeholder="Enter name"
      />

      <button onClick={editingID ? updateStudent : addStudent}>
        {editingID ? "Update" : "Add"}
      </button>

      <ul>
        {students.map((stu) => (
          <li key={stu.id}>
            {stu.name}
            <button onClick={() => deleteStudent(stu.id)}>Delete</button>
            <button onClick={() => startEdit(stu)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
