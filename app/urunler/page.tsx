"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: "radar" | "klima";
  brand: string;
  image: string;
  shortDesc: string;
  specs: string[];
  link: string;
}

const productsData: Product[] = [
  {
    id: "raymarine-cyclone-pro",
    name: "Raymarine Cyclone Pro Open Array Radar",
    category: "radar",
    brand: "Raymarine",
    image: "/radar_display.png",
    shortDesc: "Ekstrem hava koşullarında dahi üstün hedef ayrımı sunan 110W açık anten radar.",
    specs: ["110W Solid State verici", "96 deniz mili menzil", "Kuş modu (Bird Mode)", "Hızlı 60 RPM dönme hızı"],
    link: "/urunler/radar",
  },
  {
    id: "garmin-fantom-24x",
    name: "Garmin GMR Fantom 24x Dome Radar",
    category: "radar",
    brand: "Garmin",
    image: "/radar_display.png",
    shortDesc: "Yelkenliler ve motoryatlar için kompakt yapıda, Doppler MotionScope™ özellikli dome radar.",
    specs: ["50W güç çıkışı", "48 deniz mili menzil", "MotionScope™ Doppler tespiti", "Düşük güç tüketimi"],
    link: "/urunler/radar",
  },
  {
    id: "furuno-drs6a-nxt",
    name: "Furuno DRS6A-NXT Solid-State Radar",
    category: "radar",
    brand: "Furuno",
    image: "/radar_display.png",
    shortDesc: "Target Analyzer™ özelliğiyle yaklaşan tehlikeli hedefleri otomatik kırmızı renkle gösteren radar.",
    specs: ["25W verici gücü", "72 deniz mili menzil", "Target Analyzer™ & Fast Target Tracking", "Açık anten yapısı"],
    link: "/urunler/radar",
  },
  {
    id: "dometic-turbo-dtu",
    name: "Dometic Turbo DTU Klima Ünitesi",
    category: "klima",
    brand: "Dometic",
    image: "/marine_climate_control.png",
    shortDesc: "Yat kabinleri için sessiz ve %27 daha az elektrik tüketen kendinden üniteli klima.",
    specs: ["16,000 BTU kapasite", "Paslanmaz çelik drenaj tavası", "Çevre dostu R410A gazı", "Ultra sessiz kompresör"],
    link: "/urunler/klima",
  },
  {
    id: "webasto-bluecool-v",
    name: "Webasto BlueCool V-Series Chiller Sistemi",
    category: "klima",
    brand: "Webasto",
    image: "/marine_climate_control.png",
    shortDesc: "Süperyatlar için inverter kompresörlü merkezi iklimlendirme chiller sistemi.",
    specs: ["50,000 - 550,000 BTU arası", "İnverter kompresör (Değişken Hızlı)", "%35'e varan enerji tasarrufu", "Webasto kontrol ekranı"],
    link: "/urunler/klima",
  },
  {
    id: "cruisair-stowaway",
    name: "Cruisair Stowaway Compact AC",
    category: "klima",
    brand: "Cruisair",
    image: "/marine_climate_control.png",
    shortDesc: "Dar alanlı kamaralar veya kaptan dairesi için tasarlanmış küçük ve verimli klima.",
    specs: ["8,000 BTU kapasite", "Kompakt tasarım", "Yüksek verimli fan motoru", "Titreşim önleyici ayaklar"],
    link: "/urunler/klima",
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState<"all" | "radar" | "klima">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = filter === "all" || product.category === filter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Marin Ürün Kataloğumuz
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Güvenli seyir ve lüks konfor standartlarınızı yükseltecek seçkin marin donanımlar.
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-white/5 border border-white/5 p-6 rounded-2xl glassmorphism">
        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap">
          {[
            { id: "all", label: "Tüm Ürünler" },
            { id: "radar", label: "Radar Sistemleri" },
            { id: "klima", label: "Marin Klima / İklimlendirme" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                  : "bg-white/5 text-zinc-300 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Ürün veya marka ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-navy-dark border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors"
          />
          <svg
            className="absolute right-4 top-3 h-4 w-4 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden glassmorphism shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 w-full overflow-hidden bg-navy-dark">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <span className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-navy-dark/90 border border-primary/20">
                  {product.brand}
                </span>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>

                  {/* Specs Bullets */}
                  <ul className="space-y-1.5 mb-6">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <svg
                          className="h-3.5 w-3.5 text-primary shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <Link
                    href={`/teklif-al?product=${product.id}`}
                    className="flex-1 inline-flex h-10 items-center justify-center rounded-full bg-primary text-xs font-semibold text-black hover:bg-white transition-colors duration-300"
                  >
                    Teklif İste
                  </Link>
                  <Link
                    href={product.link}
                    className="flex-1 inline-flex h-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white hover:bg-white/5 transition-colors duration-300"
                  >
                    Detaylar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-2xl glassmorphism border border-white/5">
          <svg
            className="mx-auto h-12 w-12 text-zinc-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-bold text-white mb-1">Aramanızla Eşleşen Ürün Bulunamadı</h3>
          <p className="text-zinc-500 text-sm">Farklı bir terim aramayı veya filtreyi değiştirmeyi deneyin.</p>
        </div>
      )}
    </div>
  );
}
