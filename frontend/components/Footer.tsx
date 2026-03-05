export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-300 dark:border-zinc-800 py-10 bg-background text-foreground transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Brand */}
        <h2 className="text-xl font-semibold tracking-wide">
          CineSight AI
        </h2>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <span className="hover:opacity-100 transition">Help</span>
          <span className="hover:opacity-100 transition">Site Index</span>
          <span className="hover:opacity-100 transition">Conditions of Use</span>
          <span className="hover:opacity-100 transition">Privacy Policy</span>
        </div>

        {/* Tech */}
        <div className="text-sm opacity-70 text-center">
          Built with Next.js · Powered by AI
        </div>

        {/* Copyright */}
        <div className="text-xs opacity-60 text-center">
          © {new Date().getFullYear()} CineSight AI · By Krishna Bera
        </div>

      </div>

    </footer>
  );
}