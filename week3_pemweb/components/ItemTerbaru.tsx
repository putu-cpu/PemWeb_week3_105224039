"use client";
import { useEffect, useState } from "react";
import type { Item } from "@/lib/tipe";
type Status = "memuat" | "berhasil" | "gagal";
export default function ItemTerbaru() {
 const [items, setItems] = useState<Item[]>([]);
 const [status, setStatus] = useState<Status>("memuat");
 useEffect(() => {
 let dibatalkan = false;
 async function muat() {
 try {
 const res = await fetch("/data/item.json");
 if (!res.ok) throw new Error(`HTTP ${res.status}`);
 const data: Item[] = await res.json();
 if (!dibatalkan) {
 setItems(data.slice(0, 3));
 setStatus("berhasil");
 }
 } catch {
 if (!dibatalkan) setStatus("gagal");
 }
 }
 muat();
 return () => {
 dibatalkan = true;
 };
 }, []);
 if (status === "memuat") return <p>Memuat data…</p>;
 if (status === "gagal") {
 return <p role="alert">Data gagal dimuat. Muat ulang halaman.</p>;
 }
 return (
 <ul className="grid gap-4 sm:grid-cols-3">
 {items.map((item) => (
 <li key={item.id} className="rounded border p-4">{item.judul}</li>
 ))}
 </ul>
 );
}