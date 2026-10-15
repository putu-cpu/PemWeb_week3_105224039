import type { Metadata } from "next";
import Bagian from "@/components/Bagian";
import DaftarItem from "@/components/DaftarItem";
import { daftarItem } from "@/lib/data";
export const metadata: Metadata = { title: "Katalog | Nama Produk" };
export default function HalamanKatalog() {
 return (
 <main id="konten" className="mx-auto max-w-6xl p-4">
 <h1 className="text-3xl font-bold">Katalog</h1>
 <Bagian id="daftar" judul="Daftar Item">
 <DaftarItem items={daftarItem} />
 </Bagian>
 </main>
 );
}
