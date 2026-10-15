import type { Item, Kategori } from "@/lib/tipe";
const labelKategori: Record<Kategori, string> = {
 energi: "Energi",
 lingkungan: "Lingkungan",
 kampus: "Kampus",
};
export default function KartuItem({ item }: { item: Item }) {
 return (
 <article className="h-full rounded-lg border p-6">
 <p className="text-sm text-gray-600">
 {labelKategori[item.kategori]}
 </p>
 <h3 className="mt-1 text-lg font-semibold">{item.judul}</h3>
 <p className="mt-2 text-gray-700">{item.deskripsi}</p>
 {!item.tersedia && (
 <p className="mt-3 text-sm font-medium text-red-700">
 Sementara tidak tersedia
 </p>
 )}
 </article>
 );
}
