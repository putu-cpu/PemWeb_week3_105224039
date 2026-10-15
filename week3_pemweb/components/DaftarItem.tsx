"use client";

import { useState } from "react";
import KartuItem from "@/components/KartuItem";
import type { Item, Kategori } from "@/lib/tipe";

type Filter = Kategori | "semua";
const pilihanFilter: Filter[] = [
  "semua", "energi", "lingkungan", "kampus",
];

export default function DaftarItem({ items }: { items: Item[] }) {
  const [kataKunci, setKataKunci] = useState("");
  const [filter, setFilter] = useState<Filter>("semua");

  const hasil = items.filter((item) => {
    const cocokKata = item.judul
      .toLowerCase()
      .includes(kataKunci.toLowerCase());
    const cocokKategori = filter === "semua" || item.kategori === filter;
    return cocokKata && cocokKategori;
  });

  return (
    <div>
      <label htmlFor="cari" className="font-medium">Cari item</label>
      <input id="cari" type="search" value={kataKunci}
        onChange={(e) => setKataKunci(e.target.value)}
        className="mt-1 block w-full rounded border px-3 py-2 sm:w-80" />

      <div role="group" aria-label="Filter kategori"
        className="mt-4 flex flex-wrap gap-2">
        {pilihanFilter.map((k) => (
          <button key={k} type="button" aria-pressed={filter === k}
            onClick={() => setFilter(k)}
            className={filter === k
              ? "rounded bg-blue-700 px-3 py-1 text-white"
              : "rounded border px-3 py-1"}>
            {k}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-gray-600">
        {hasil.length} item ditemukan
      </p>

      {hasil.length === 0 ? (
        <p className="mt-4">Tidak ada item yang sesuai.</p>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-6
          sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((item) => (
            <li key={item.id}><KartuItem item={item} /></li>
          ))}
        </ul>
      )}
    </div>
  );
}