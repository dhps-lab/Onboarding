"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        username:   user,
        password,
      });
      localStorage.setItem("token", data.access_token);
      router.push("/products");
    } catch {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Inicio de sesión</h1>
      <div className="w-64 space-y-2">
        <input
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
}
