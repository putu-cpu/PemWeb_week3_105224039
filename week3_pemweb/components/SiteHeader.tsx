import Link from "next/link";

type Tautan = { href: string; label: string };

interface SiteHeaderProps {
  namaProduk: string;
  tautan: Tautan[];
}

export default function SiteHeader({
  namaProduk,
  tautan,
}: SiteHeaderProps) {
  return (
    <header className="border-b">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link href="/" className="text-lg font-bold">
          {namaProduk}
        </Link>
        <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          {tautan.map((t) => (
            <li key={t.href}>
              <Link href={t.href}>{t.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
