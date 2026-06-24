import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03060f] border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                className="h-7 w-7 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v11m0 0a3 3 0 100 6 3 3 0 000-6zm-4-4h8"
                />
              </svg>
              <span className="text-lg font-bold tracking-wider text-white uppercase">
                MARIN<span className="text-primary">SERVICE</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Lüks yatlar, yelkenliler ve ticari gemiler için üst düzey radar entegrasyonu ve marin iklimlendirme çözümleri sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/urunler" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                  Tüm Ürünler
                </Link>
              </li>
              <li>
                <Link href="/urunler/radar" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                  Radar Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/urunler/klima" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                  Marin Klima / AC
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm text-zinc-400 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              İletişim & Lokasyon
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm text-zinc-400">
                <svg
                  className="h-5 w-5 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Serbest Bölge Mahallesi,Liman Serbest Bölge Konyaaltı/Antalya</span>
              </li>
              <li className="flex gap-2.5 text-sm text-zinc-400">
                <svg
                  className="h-5 w-5 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+902523190000" className="hover:text-primary transition-colors">
                  +90 252 319 00 00
                </a>
              </li>
              <li className="flex gap-2.5 text-sm text-zinc-400">
                <svg
                  className="h-5 w-5 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@marinservice.com" className="hover:text-primary transition-colors">
                  info@marinservice.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Working Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Çalışma Saatleri
            </h3>
            <p className="text-sm text-zinc-400 mb-2">
              Pazartesi - Cumartesi: 08:30 - 18:30
            </p>
            <p className="text-sm text-zinc-400 mb-6">
              Pazar: Kapalı (7/24 Acil Teknik Servis Aktiftir)
            </p>
            <div className="border border-white/10 rounded-lg p-3 bg-white/5">
              <span className="text-xs text-primary font-semibold uppercase block mb-1">Acil Destek</span>
              <p className="text-xs text-zinc-300">Sözleşmeli yatlarımıza 7/24 kesintisiz marin teknik destek sunmaktayız.</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Marin Service Yachting & Electronics. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link href="/gizlilik-politikasi" className="hover:text-zinc-300">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-zinc-300">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
