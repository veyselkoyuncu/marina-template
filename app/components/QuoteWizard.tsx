"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function QuoteWizard() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    category: "",
    vesselType: "",
    vesselLength: "",
    marinaLocation: "",
    description: "",
    selectedModel: "",
    name: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check query params on mount/change
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      // Map product param to specific values
      if (productParam.includes("radar") || productParam.includes("cyclone") || productParam.includes("fantom") || productParam.includes("drs6a")) {
        setFormData((prev) => ({
          ...prev,
          category: "radar",
          selectedModel: productParam,
          description: `Ürün Kataloğundan Seçilen Ürün: ${productParam.toUpperCase().replace(/-/g, " ")}`,
        }));
      } else if (productParam.includes("klima") || productParam.includes("dometic") || productParam.includes("webasto") || productParam.includes("cruisair")) {
        setFormData((prev) => ({
          ...prev,
          category: "klima",
          selectedModel: productParam,
          description: `Ürün Kataloğundan Seçilen Ürün: ${productParam.toUpperCase().replace(/-/g, " ")}`,
        }));
      }
      // Jump directly to step 2 as category is preselected!
      setStep(2);
    }
  }, [searchParams]);

  // Validation helper
  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.category !== "";
      case 2:
        return formData.vesselType !== "" && formData.vesselLength !== "" && formData.marinaLocation !== "";
      case 3:
        return formData.description.length >= 10;
      case 4:
        return formData.name.trim() !== "" && formData.phone.trim() !== "" && formData.email.includes("@");
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const categories = [
    { id: "radar", title: "Radar & Seyir Güvenliği", icon: "📡", desc: "Solid-state radar montajı, NMEA 2000 entegrasyonu ve kalibrasyon" },
    { id: "klima", title: "Klima & İklimlendirme", icon: "❄️", desc: "Merkezi chiller sistemleri, self-contained klimalar ve periyodik bakım" },
    { id: "elektronik", title: "Genel Elektronik & Arıza", icon: "⚡", desc: "Autopilot, sonar, telsiz, akü kontrol ve genel arıza tespit hizmetleri" },
    { id: "diger", title: "Diğer Teknik Hizmetler", icon: "🛠️", desc: "Özel projelendirme ve marin montaj talepleri" },
  ];

  const vesselTypes = [
    { id: "motoryacht", title: "Motoryat" },
    { id: "sailboat", title: "Yelkenli" },
    { id: "catamaran", title: "Katamaran" },
    { id: "commercial", title: "Ticari Gemi / Balıkçı" },
  ];

  const lengthOptions = [
    { id: "small", title: "10 Metre Altı (<32ft)" },
    { id: "medium", title: "10 - 15 Metre (32-50ft)" },
    { id: "large", title: "15 - 24 Metre (50-80ft)" },
    { id: "super", title: "24 Metre Üstü (80ft+)" },
  ];

  if (submitted) {
    return (
      <div className="text-center py-16 px-4 bg-white/5 rounded-3xl glassmorphism border border-white/5 max-w-2xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="h-16 w-16 text-primary flex items-center justify-center bg-primary/10 rounded-full border border-primary/20 animate-bounce">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-white">Teklif Talebiniz Alındı!</h2>
        <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
          Sayın <strong className="text-white">{formData.name}</strong>, teknenize özel hazırlayacağımız fiyat teklifi ve teknik analiz raporu en geç <strong>2 saat</strong> içerisinde <strong className="text-white">{formData.email}</strong> adresinize gönderilecektir.
        </p>
        <div className="border border-white/5 bg-navy-dark rounded-2xl p-5 text-left w-full space-y-2 mt-4 text-xs sm:text-sm">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Talebinizin Özeti</h3>
          <p><span className="text-zinc-400">Hizmet Alanı:</span> {categories.find((c) => c.id === formData.category)?.title}</p>
          <p><span className="text-zinc-400">Tekne Tipi & Boyu:</span> {vesselTypes.find((v) => v.id === formData.vesselType)?.title} - {lengthOptions.find((l) => l.id === formData.vesselLength)?.title}</p>
          <p><span className="text-zinc-400">Tekne Konumu:</span> {formData.marinaLocation}</p>
          {formData.selectedModel && <p><span className="text-zinc-400">Seçilen Cihaz:</span> {formData.selectedModel.toUpperCase().replace(/-/g, " ")}</p>}
        </div>
        <button
          onClick={() => {
            setFormData({
              category: "",
              vesselType: "",
              vesselLength: "",
              marinaLocation: "",
              description: "",
              selectedModel: "",
              name: "",
              phone: "",
              email: "",
            });
            setStep(1);
            setSubmitted(false);
          }}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-black hover:bg-white transition-colors duration-300"
        >
          Yeni Bir Teklif İste
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto rounded-3xl bg-white/5 border border-white/5 p-6 sm:p-10 glassmorphism shadow-2xl">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => {
            const stepNum = i + 1;
            const isCompleted = step > stepNum;
            const isCurrent = step === stepNum;
            return (
              <div key={i} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-primary text-black"
                      : isCurrent
                      ? "bg-white text-black ring-4 ring-primary/20"
                      : "bg-navy-dark text-zinc-500 border border-white/10"
                  }`}
                >
                  {isCompleted ? "✓" : stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`h-0.5 w-6 sm:w-12 mx-1 transition-colors duration-300 ${
                      isCompleted ? "bg-primary" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">
          Adım {step} / 4
        </span>
      </div>

      {/* Step Content */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: Category */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Hangi konuda teklif almak istersiniz?</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">İhtiyaç duyduğunuz teknik servis veya montaj kategorisini seçin.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setFormData({ ...formData, category: c.id })}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 ${
                    formData.category === c.id
                      ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      : "bg-navy-dark/60 border-white/10 hover:border-white/20 hover:bg-navy-dark"
                  }`}
                >
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">{c.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{c.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Vessel Details */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Tekne ve Konum Bilgileri</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">Hesaplamaların doğruluğu için tekne yapısı ve konumu önemlidir.</p>

            {/* Vessel Type */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tekne Tipi</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vesselTypes.map((v) => (
                  <button
                    type="button"
                    key={v.id}
                    onClick={() => setFormData({ ...formData, vesselType: v.id })}
                    className={`py-3 px-2 rounded-xl text-center text-xs font-semibold border transition-all duration-300 ${
                      formData.vesselType === v.id
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-navy-dark/65 border-white/10 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    {v.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Vessel Length */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tekne Boyu</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lengthOptions.map((l) => (
                  <button
                    type="button"
                    key={l.id}
                    onClick={() => setFormData({ ...formData, vesselLength: l.id })}
                    className={`py-3.5 px-4 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all duration-300 flex items-center justify-between ${
                      formData.vesselLength === l.id
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-navy-dark/65 border-white/10 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <span>{l.title}</span>
                    <span className="text-[10px] uppercase font-bold text-zinc-500">Boyut Sınıfı</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Marina Location */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Teknenin Şu Anki Konumu / Marina</label>
              <input
                type="text"
                required
                value={formData.marinaLocation}
                onChange={(e) => setFormData({ ...formData, marinaLocation: e.target.value })}
                className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Örn: Antalya Konyaaltı Serbest Bölge, Setur Marina vb."
              />
            </div>
          </div>
        )}

        {/* STEP 3: Requirements & Specifications */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Talep Detayları</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">Lütfen ihtiyacınızı veya tercih ettiğiniz donanım detaylarını belirtin.</p>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Talebiniz / Mevcut Arıza veya Montaj Detayı</label>
              <textarea
                required
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Klima BTU kapasitesi, montaj yapılacak alan, radarın monte edileceği direk yüksekliği veya yaşadığınız arızayı en az 10 karakter ile açıklayınız..."
              />
              <span className="text-[10px] text-zinc-500 block text-right">
                En az {Math.max(0, 10 - formData.description.length)} karakter daha yazmalısınız.
              </span>
            </div>

            {formData.selectedModel && (
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-3">
                <span className="text-lg">📡</span>
                <span className="text-xs text-zinc-300">
                  Katalogdan seçilen ürün talebinize eklendi: <strong>{formData.selectedModel.toUpperCase().replace(/-/g, " ")}</strong>
                </span>
              </div>
            )}
          </div>
        )}

        {/* STEP 4: Contact Details */}
        {step === 4 && (
          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">İletişim Bilgileri</h2>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">Teklifinizi göndermek ve gerektiğinde teknik detayları netleştirmek için iletişim adresleriniz.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Adınız Soyadınız</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Örn: Mehmet Özkan"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Telefon Numarası</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Örn: 0532 Xxx Xx Xx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">E-posta Adresiniz</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Örn: mehmet@email.com"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Footer Navigation buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-white/5 mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white hover:bg-white/5 transition-colors duration-300"
            >
              Geri
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isStepValid()}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-black transition-colors hover:bg-white duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Devam Et
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!isStepValid() || loading}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-black transition-all hover:bg-white duration-300 glow-primary disabled:opacity-40"
            >
              {loading ? "Gönderiliyor..." : "Teklif Talebini Gönder"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
