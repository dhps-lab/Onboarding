"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`).then((res) => setProducts(res.data));
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
        onClick={() => (router.push("/onboarding"))}
      >
        Abrir cuenta
      </button>
    </div>
  );
}
