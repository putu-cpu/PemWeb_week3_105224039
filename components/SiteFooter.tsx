export default function SiteFooter({ namaProduk }: { namaProduk: string }) {
  return (
    <footer className="border-t bg-gray-100 p-6 text-center text-sm text-gray-600">
      <p>&copy; 2026 {namaProduk}</p>
    </footer>
  );
}