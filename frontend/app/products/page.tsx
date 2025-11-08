"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Productos disponibles</h1>
      <ul className="divide-y divide-gray-200">
        {products.map((p) => (
          <li key={p.id} className="py-2">
            <strong>{p.name}</strong> - {p.description}
          </li>
        ))}
      </ul>
      <button
        className="mt-4"
        onClick={() => (window.location.href = "/onboarding")}
      >
        Abrir cuenta
      </button>
    </div>
  );
}
