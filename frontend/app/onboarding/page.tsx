"use client";
import { useState } from "react";
import axios from "axios";

export default function OnboardingPage() {
  const [form, setForm] = useState({
    name: "",
    document: "",
    email: "",
    initialAmount: 0,
  });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    console.log(form);
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/onboarding`, {...form, initialAmount: (+form.initialAmount)}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResult(data);
    } catch (error: any) {
      console.log(error.response.data);
      const message = error.response.data;
      console.log(message);
      setResult(message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow space-y-3">
      <h1 className="text-xl font-bold mb-4">Apertura de cuenta</h1>
      {["name", "document", "email", "initialAmount"].map((field) => (
        <input
          key={field}
          placeholder={field}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          type={field === "initialAmount" ? "number" : "text"}
        />
      ))}
      <button onClick={handleSubmit}>Enviar solicitud</button>
      {result && result.onboardingId &&(
        <div className="mt-4 border p-3 rounded bg-green-50">
          <p>ID: {result.onboardingId}</p>
          <p>Estado: {result.status}</p>
        </div>
      )}
      {result && result.message &&(
        <div className="mt-4 border p-3 rounded bg-red-50">
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}
