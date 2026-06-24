import { Suspense } from "react";
import QuoteWizard from "@/app/components/QuoteWizard";

export default function QuotePage() {
  return (
    <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Teklif İsteme Sihirbazı
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
          4 basit adımda teknenize özel marin klima ve radar montaj/servis teklifi oluşturun. 2 saat içinde detaylı fiyatlandırmayı gönderelim.
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      }>
        <QuoteWizard />
      </Suspense>
    </div>
  );
}
