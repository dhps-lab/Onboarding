"use client";
import { useState } from "react";
import axios from "axios";

export default function OnboardingPage() {
  const [form, setForm] = useState({
    name: "",
    document: "",
    email: "",
    amount: "",
  });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("http://localhost:3000/onboarding", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setResult(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow space-y-3">
      <h1 className="text-xl font-bold mb-4">Apertura de cuenta</h1>
      {["name", "document", "email", "amount"].map((field) => (
        <input
          key={field}
          placeholder={field}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          type={field === "amount" ? "number" : "text"}
        />
      ))}
      <button onClick={handleSubmit}>Enviar solicitud</button>
      {result && (
        <div className="mt-4 border p-3 rounded bg-green-50">
          <p>ID: {result.onboardingId}</p>
          <p>Estado: {result.status}</p>
        </div>
      )}
    </div>
  );
}
