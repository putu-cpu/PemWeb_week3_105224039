interface BagianProps {
 id: string;
 judul: string;
 children: React.ReactNode;
}
export default function Bagian({ id, judul, children }: BagianProps) {
 return (
 <section id={id} aria-labelledby={`judul-${id}`} className="py-8">
 <h2 id={`judul-${id}`} className="text-2xl font-bold">{judul}</h2>
 <div className="mt-6">{children}</div>
 </section>
 );
}