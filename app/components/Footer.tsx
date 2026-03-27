import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-mono tracking-widest opacity-60 border-t border-foreground mt-auto">
      <div className="mb-4 md:mb-0">© {new Date().getFullYear()} MARKODEE | SVA PRAVA ZADRŽANA</div>
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/diimicmarko/"
          className="hover:text-accent hover:opacity-100 transition-colors duration-300"
        >
          INSTAGRAM
        </Link>
        <Link
          href="https://www.tiktok.com/@dj_markodee"
          className="hover:text-accent hover:opacity-100 transition-colors duration-300"
        >
          TIKTOK
        </Link>
        <Link
          href="https://open.spotify.com/playlist/1HzWQzqb9tQzWZpE0EJIMM"
          className="hover:text-accent hover:opacity-100 transition-colors duration-300"
        >
          SPOTIFY
        </Link>
        <Link
          href="https://soundcloud.com/ka-i-izmaroka"
          className="hover:text-accent hover:opacity-100 transition-colors duration-300"
        >
          SOUNDCLOUD
        </Link>
      </div>
    </footer>
  );
}
