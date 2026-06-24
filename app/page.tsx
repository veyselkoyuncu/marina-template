import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_yacht_night.png"
            alt="Lüks Yat Marin Servisi"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6 uppercase animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Mühendislik & Teknik Servis Standartları
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Lüks Yatlar ve Ticari Gemiler için{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              Profesyonel Çözümler
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
            Seyir güvenliğiniz için yüksek hassasiyetli radar sistemleri ve deniz üstü konforunuz için ileri düzey marin klima entegrasyonu sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              href="/teklif-al"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-black transition-all hover:bg-white hover:scale-105 duration-300 glow-primary hover:shadow-[0_0_25px_rgba(0,229,255,0.8)]"
            >
              Teklif İstiyorum
            </Link>
            <Link
              href="/urunler"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40 duration-300"
            >
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl glassmorphism shadow-2xl">
          {[
            { value: "15+", label: "Yıllık Tecrübe" },
            { value: "500+", label: "Servis Verilen Yat" },
            { value: "24/7", label: "Acil Teknik Destek" },
            { value: "100%", label: "Müşteri Memnuniyeti" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center flex flex-col justify-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-primary block mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Hizmet Alanlarımız
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Uzmanlaştığımız Marin Teknolojileri
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Radar Card */}
          <div className="group relative rounded-2xl overflow-hidden glassmorphism shadow-xl flex flex-col justify-between h-[450px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/radar_display.png"
                alt="Marin Radar Entegrasyonu"
                fill
                className="object-cover opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/90 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Radar & Seyir Güvenliği
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Yüksek frekanslı ve katı hal (Solid-State) Doppler marin radar montajı, mevcut harita çizer (chartplotter) ve sonar sistemleri ile entegrasyonu, arıza tespiti ve kalibrasyonu yapmaktayız.
                </p>
              </div>

              <div>
                <Link
                  href="/urunler/radar"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors duration-300 group"
                >
                  Radar Çözümlerini İncele
                  <svg
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* AC Card */}
          <div className="group relative rounded-2xl overflow-hidden glassmorphism shadow-xl flex flex-col justify-between h-[450px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/marine_climate_control.png"
                alt="Marin Klima Sistemleri"
                fill
                className="object-cover opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/90 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Marin İklimlendirme & Klima
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Kabine özel kompakt klimalardan süperyatlar için merkezi değişken devirli chiller (soğutmalı su) sistemlerine kadar projelendirme, montaj, gaz dolumu, kompresör değişimi ve periyodik servis.
                </p>
              </div>

              <div>
                <Link
                  href="/urunler/klima"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors duration-300 group"
                >
                  Klima Çözümlerini İncele
                  <svg
                    className="h-4 w-4 transform transition-transform group-hover:translate-x-1 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#03060f] border-y border-white/5 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Farkımız & Değerlerimiz
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Neden Marin Service?
            </p>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Marin Standartlarında İşçilik",
                desc: "Yat marin elektroniği ve iklimlendirme sistemlerinde tüm kablolama ve montajlar marine-grade (deniz ortamına dayanıklı) malzemeler ile yüksek titizlikle gerçekleştirilir.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "7/24 Acil Teknik Müdahale",
                desc: "Antalya Serbest Bölge ve çevre limanlardaki teknelere hızlı ulaşım sağlamak için mobil servis araçlarımızla deniz üstünde de yanınızdayız.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Garantili & Orijinal Parça",
                desc: "Raymarine, Garmin, Furuno, Dometic ve Webasto gibi önde gelen markaların orijinal yedek parçalarını ve montaj kitlerini kullanıyoruz.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl glassmorphism-light hover:border-primary/20 transition-all duration-300 flex flex-col gap-4">
                <div className="h-10 w-10 text-primary flex items-center justify-center bg-primary/5 rounded-lg border border-primary/10">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Müşteri Deneyimleri
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Yat Sahipleri Ne Diyor?
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "Antalya'dan yola çıkışımız öncesinde yatımızın chiller klima ünitesinde ciddi bir arıza oluşmuştu. Teknik ekibin hızlı müdahalesi ve parça temini sayesinde planımızı ertelemeden yola çıkabildik. Son derece profesyoneller.",
              author: "Cem A. (24m Motoryat Sahibi)",
              rating: 5,
            },
            {
              quote: "Yenilenen açık anten radar sistemimizin montajı ve kalibrasyonu Marin Service tarafından yapıldı. Doppler teknolojisi ve sisli havalardaki performans mükemmel. Marin işçilik standartları harika.",
              author: "Kaan B. (16m Yelkenli Yat Sahibi)",
              rating: 5,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl glassmorphism flex flex-col justify-between gap-6">
              <p className="text-zinc-300 italic text-base leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-sm font-semibold text-white">{item.author}</span>
                <div className="flex text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="relative rounded-3xl overflow-hidden glassmorphism p-10 sm:p-16 text-center flex flex-col items-center gap-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 opacity-30 z-0" />
          <h2 className="text-3xl sm:text-5xl font-bold text-white relative z-10">
            Hemen Detaylı Fiyat Teklifi Alın
          </h2>
          <p className="text-zinc-300 max-w-xl text-base sm:text-lg relative z-10">
            Teknenizin boyuna, markasına ve ihtiyaç duyduğunuz radar veya klima sistemine özel bütçelendirmeyi 2 saat içinde hazırlayalım.
          </p>
          <Link
            href="/teklif-al"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-black transition-all hover:bg-white hover:scale-105 duration-300 relative z-10 glow-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.7)]"
          >
            Teklif Sihirbazını Başlat
          </Link>
        </div>
      </section>
    </div>
  );
}
