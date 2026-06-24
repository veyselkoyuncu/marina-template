import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Mühendislik Standartları",
      desc: "Her montaj ve tamir sürecinde uluslararası marin güvenlik standartlarına (CE, NMEA, ABYC) uygun malzeme ve işçilik uyguluyoruz.",
    },
    {
      title: "Süreklilik & 7/24 Servis",
      desc: "Denizcilikte zamanın kıymetini biliyoruz. Seyir halindeyken karşılaşabileceğiniz tüm teknik aksaklıklar için nöbetçi teknik ekiplerimiz Antalya ve Konyaaltı bölgesinde 7/24 görev başındadır.",
    },
    {
      title: "Uzman Sertifikalı Kadro",
      desc: "Teknisyenlerimiz Raymarine, Garmin, Dometic ve Webasto eğitimlerini tamamlamış, sertifikalı marin elektroniği ve soğutma mühendislerinden oluşur.",
    },
  ];

  return (
    <div className="w-full py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 inline-block">
          Hikayemiz & Vizyonumuz
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Hakkımızda
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base">
          Mavi suların konforu ve emniyeti için 15 yılı aşkın teknik birikimimizle Antalya Konyaaltı Serbest Bölge'de hizmet veriyoruz.
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Main Content Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl bg-navy-dark border border-white/10">
          <Image
            src="/hero_yacht_night.png"
            alt="Marin Service Hakkımızda"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Denizde Güven ve Üstün Konfor Standartları Sunuyoruz
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Marin Service, yat ve gemi elektroniği ile iklimlendirme sistemleri üzerine kurulmuş, teknik tecrübesi yüksek ve marin disiplinine sahip bir uzmanlık merkezidir. Kuruluşumuzdan bu yana yüzlerce süperyat, yelkenli ve ticari gemiye radar sistemleri, sonar üniteleri, autopilot entegrasyonu, marin klima projelendirmesi ve servis desteği sağladık.
          </p>
          <p className="text-zinc-350 text-sm sm:text-base leading-relaxed">
            Amacımız, yat sahiplerinin seyirlerini güvenli, limandaki konaklamalarını ise en konforlu şekilde geçirmelerini sağlamaktır. Bu nedenle, küresel marin devlerinin en yeni teknolojilerini ve en güvenilir orijinal yedek parçalarını Antalya merkezli teknik üssümüzle denizle buluşturuyoruz.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            İlkelerimiz
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Bizi Biz Yapan Değerlerimiz
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glassmorphism hover:border-primary/20 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="h-10 w-10 text-primary flex items-center justify-center bg-primary/5 rounded-lg border border-primary/10">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">{value.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Logos/Brands list placeholder */}
      <div className="py-12 bg-white/5 border border-white/5 rounded-3xl p-8 text-center glassmorphism">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
          Çalıştığımız Markalar
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["Raymarine", "Garmin", "Furuno", "Dometic", "Webasto", "Cruisair"].map((brand, idx) => (
            <span
              key={idx}
              className="text-lg md:text-xl font-bold tracking-widest text-zinc-500 hover:text-white transition-colors duration-300 select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
