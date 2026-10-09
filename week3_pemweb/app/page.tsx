import Link from "next/link";
import Bagian from "@/components/Bagian";
import ItemTerbaru from "@/components/ItemTerbaru";

export default function Beranda() {
  return (
    <main id="konten" className="mx-auto max-w-6xl p-4">
      <section aria-labelledby="judul-utama" className="py-8">
        <h1 id="judul-utama" className="text-4xl font-extrabold tracking-tight">Sistem Pemantauan Energi & Lingkungan Kampus</h1>
        <p className="mt-4 text-lg text-gray-600">Platform terpadu untuk memantau penggunaan energi dan parameter lingkungan di seluruh fasilitas kampus secara real-time, mewujudkan kampus hijau yang efisien dan berkelanjutan.</p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <Bagian id="cara-kerja" judul="Cara Kerja">
          <p className="text-gray-700 leading-relaxed mb-4">Sistem ini mengumpulkan data dari berbagai sensor cerdas (IoT) yang tersebar di lingkungan kampus, termasuk panel surya, turbin angin mini, dan sensor kualitas udara. Data tersebut dikirimkan secara nirkabel ke server pusat untuk diproses dan dianalisis.</p>
          <p className="text-gray-700 leading-relaxed">Pengelola kampus dapat melihat informasi real-time dan laporan berkala melalui antarmuka web interaktif ini. Peringatan dini akan dikirimkan otomatis jika mendeteksi penggunaan energi yang tidak wajar atau parameter kualitas udara yang menurun.</p>
        </Bagian>

        <aside aria-label="Informasi tambahan" className="rounded-lg bg-gray-100 p-6 self-start mt-8 lg:mt-0">
          <h3 className="font-semibold text-lg mb-2">Kenapa ini penting?</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Menghemat biaya operasional kampus.</li>
            <li>Mengurangi jejak karbon (carbon footprint).</li>
            <li>Menciptakan lingkungan belajar yang lebih sehat dan nyaman.</li>
          </ul>
        </aside>
      </div>

      <Bagian id="terbaru" judul="Item Terbaru">
        <ItemTerbaru />
      </Bagian>

      <Bagian id="kontak" judul="Hubungi Kami">
        <form className="mt-4 grid max-w-xl gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">Nama lengkap</label>
            <input id="nama" name="nama" type="text" required autoComplete="name" className="rounded border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">Surel</label>
            <input id="email" name="email" type="email" required autoComplete="email" aria-describedby="email-bantuan" className="rounded border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" />
            <p id="email-bantuan" className="text-sm text-gray-600">Gunakan alamat surel yang aktif.</p>
          </div>
          <fieldset className="flex flex-col gap-1">
            <legend className="font-medium">Peran</legend>
            <label><input type="radio" name="peran" value="mahasiswa" /> Mahasiswa</label>
            <label><input type="radio" name="peran" value="dosen" /> Dosen/Staf</label>
            <label><input type="radio" name="peran" value="lainnya" /> Lainnya</label>
          </fieldset>
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan" className="font-medium">Pesan</label>
            <textarea id="pesan" name="pesan" rows={4} className="rounded border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" />
          </div>
          <button type="submit" className="rounded border px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 bg-blue-700 font-semibold text-white">Kirim</button>
        </form>
      </Bagian>
    </main>
  );
}