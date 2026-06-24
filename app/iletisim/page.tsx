"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 inline-block">
          Bizimle İletişime Geçin
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          İletişim
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base">
          Sorularınız, servis talepleriniz veya acil teknik durumlar için bizimle hızlıca irtibata geçebilirsiniz.
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Card 1: Phone */}
          <div className="p-6 rounded-2xl glassmorphism flex items-start gap-4">
            <div className="h-10 w-10 text-primary flex items-center justify-center bg-primary/5 rounded-xl border border-primary/10 shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-1">Telefon</h3>
              <p className="text-white font-bold text-base hover:text-primary transition-colors">
                <a href="tel:+902523190000">+90 252 319 00 00</a>
              </p>
              <p className="text-zinc-500 text-xs mt-1">7/24 Teknik Acil Servis Desteği</p>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-2xl glassmorphism flex items-start gap-4">
            <div className="h-10 w-10 text-primary flex items-center justify-center bg-primary/5 rounded-xl border border-primary/10 shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-1">E-Posta</h3>
              <p className="text-white font-bold text-base hover:text-primary transition-colors">
                <a href="mailto:info@marinservice.com">info@marinservice.com</a>
              </p>
              <p className="text-zinc-500 text-xs mt-1">Genel bilgi ve servis talepleri</p>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="p-6 rounded-2xl glassmorphism flex items-start gap-4">
            <div className="h-10 w-10 text-primary flex items-center justify-center bg-primary/5 rounded-xl border border-primary/10 shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-1">Adres</h3>
              <p className="text-white font-medium text-sm leading-relaxed">
                Yalıkavak Marina, D-Blok No: 12, Bodrum / Muğla
              </p>
              <p className="text-zinc-500 text-xs mt-1">Tüm marinalara mobil araç servisimiz vardır.</p>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/902523190000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors duration-300"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.36 1.489 5.568 0 10.099-4.524 10.1-10.088C22.11 5.068 17.585.55 12.01.55c-5.57 0-10.1 4.526-10.103 10.091-.001 2.12.557 4.18 1.62 5.96L2.55 21.46l4.097-1.306z" />
            </svg>
            WhatsApp Hızlı Destek
          </a>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 p-8 rounded-2xl glassmorphism flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Bize Mesaj Gönderin</h2>
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 text-white p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 py-12">
                <svg className="h-12 w-12 text-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold">Mesajınız Alındı!</h3>
                <p className="text-zinc-400 text-sm max-w-sm">
                  Teknik ekibimiz mesajınızı inceleyip en kısa süre içerisinde e-posta veya telefon yoluyla size dönüş sağlayacaktır.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-primary font-semibold hover:underline"
                >
                  Yeni bir mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Adınız Soyadınız</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Örn: Ahmet Yılmaz"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">E-posta Adresiniz</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Örn: ahmet@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Konu</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Örn: Servis talebi veya fiyat bilgisi"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Mesajınız</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-navy-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Talebinizi buraya yazın..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-black transition-colors hover:bg-white duration-300 disabled:opacity-50"
                >
                  {loading ? "Gönderiliyor..." : "Mesajı Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mock Map */}
      <div className="relative rounded-3xl overflow-hidden h-[300px] border border-white/10 shadow-2xl bg-navy-dark">
        {/* Sleek styling for the map placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-navy-dark via-navy-light/80 to-navy-dark z-10">
          <svg className="h-10 w-10 text-primary mb-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="text-lg font-bold text-white mb-1">Bodrum Yalıkavak Marina Ofisimiz</h3>
          <p className="text-zinc-400 text-sm max-w-md mb-2">
            Bodrum yarımadasındaki D-Marin Turgutreis, Milta Bodrum Marina ve Yalıkavak Marina lokasyonlarına 30 dakika içerisinde gezici teknik servis aracımızla ulaşıyoruz.
          </p>
          <span className="text-xs text-primary font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            37°01'44.4\"N 27°16'51.6\"E
          </span>
        </div>
      </div>
    </div>
  );
}
