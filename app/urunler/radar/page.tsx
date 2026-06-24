import Image from "next/image";
import Link from "next/link";

export default function RadarPage() {
  const services = [
    {
      title: "Profesyonel Montaj",
      desc: "Radom ve Açık Anten sistemlerinizin direk, hardtop veya rollbar üzerine doğru açıda montajı.",
    },
    {
      title: "Sistem Entegrasyonu",
      desc: "Radarınızın Raymarine, Garmin, Simrad, Furuno Chartplotter ve otopilot ekranları ile NMEA 2000 entegrasyonu.",
    },
    {
      title: "Doppler Kalibrasyonu",
      desc: "Yapay zeka tabanlı hedef izleme ve Doppler renk kodlama ayarlarının hassas şekilde yapılması.",
    },
    {
      title: "Arıza & Test Hizmetleri",
      desc: "Anten dönme motoru, magnetron değişimi, RF modül arızaları ve kablo kayıplarının giderilmesi.",
    },
  ];

  const radarModels = [
    {
      name: "Raymarine Cyclone Pro",
      specs: [
        { name: "Verici Gücü", value: "110W Solid State" },
        { name: "Maksimum Menzil", value: "96 Deniz Mili" },
        { name: "Anten Boyu", value: "3, 4 veya 6 Ayak Açık Anten" },
        { name: "Dönme Hızı", value: "60 RPM'e kadar" },
        { name: "Teknolojiler", value: "Doppler Target Tracking, CHIRP Sıkıştırma, Kuş Modu" },
      ],
    },
    {
      name: "Garmin GMR Fantom 24x",
      specs: [
        { name: "Verici Gücü", value: "50W Solid State" },
        { name: "Maksimum Menzil", value: "48 Deniz Mili" },
        { name: "Anten Boyu", value: "24 İnç Kapalı Kubbe (Radome)" },
        { name: "Dönme Hızı", value: "24 veya 48 RPM" },
        { name: "Teknolojiler", value: "MotionScope™ Doppler, Hedef İzleme, Çift Menzil" },
      ],
    },
    {
      name: "Furuno DRS6A-NXT",
      specs: [
        { name: "Verici Gücü", value: "25W Solid State" },
        { name: "Maksimum Menzil", value: "72 Deniz Mili" },
        { name: "Anten Boyu", value: "3.5, 4 veya 6 Ayak Açık Anten" },
        { name: "Dönme Hızı", value: "24, 36 veya 48 RPM" },
        { name: "Teknolojiler", value: "Target Analyzer™, Rezerv Tank Çözümleri, Yağmur Koruması" },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/radar_display.png"
            alt="Radar Sistemleri Hizmetleri"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
            Deniz Elektroniği
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Marine Radar & Seyir Sistemleri
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            Görüş mesafesinin sıfıra indiği sisli ve karanlık havalarda, en hassas Doppler teknolojisi ile güvenli seyrinizi garanti altına alın.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Hizmetlerimiz
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Radar Teknik Servis & Montaj Çözümleri
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glassmorphism hover:border-primary/20 transition-all duration-300 flex items-start gap-5"
            >
              <div className="h-10 w-10 text-primary flex items-center justify-center bg-primary/5 rounded-xl border border-primary/10 shrink-0">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Model Tech Specs */}
      <section className="py-20 bg-[#03060f] border-y border-white/5 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Ürün Spesifikasyonları
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              Karşılaştırmalı Radar Çizelgesi
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {radarModels.map((model, idx) => (
              <div key={idx} className="rounded-2xl glassmorphism overflow-hidden shadow-xl">
                <div className="bg-primary/5 border-b border-white/5 p-6 text-center">
                  <h3 className="text-lg font-extrabold text-white">{model.name}</h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {model.specs.map((spec, sIdx) => (
                        <tr key={sIdx} className="border-b border-white/5 last:border-0">
                          <td className="py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider w-1/3">
                            {spec.name}
                          </td>
                          <td className="py-3 text-xs sm:text-sm text-white font-medium pl-4">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-8">
                    <Link
                      href={`/teklif-al?product=${model.name.toLowerCase().replace(/ /g, "-")}`}
                      className="w-full inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-black hover:bg-white transition-colors duration-300"
                    >
                      Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation and Call to Action */}
      <section className="py-20 mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Güvenli Seyir İçin Radarı Doğru Seçin
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Teknenizin seyir hızı, gövde tipi ve gezi rotasına göre kubbe (Radome) veya açık anten radar gereksinimini ücretsiz keşifle belirliyoruz.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/teklif-al"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-black transition-all hover:bg-white hover:scale-105 duration-300 glow-primary"
          >
            Detaylı Teklif Al
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-sm font-semibold text-white hover:bg-white/5 transition-colors duration-300"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
