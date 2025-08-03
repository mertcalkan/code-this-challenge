export const WhatIsCreativeCoding = () => {
  return (
    <section id="creative-coding" className="bg-zinc-100 py-24 px-6">
      <div className="container mx-auto max-w-4xl space-y-12 text-center md:text-left">
        {/* Başlık */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Kodla Yarat
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Kreatif kodlama, programlamayı yalnızca işlevsel bir araç değil, sanatsal bir ifade biçimi olarak ele alır. Bu yaklaşımda kod, renkleri, desenleri ve hareketi kontrol eden bir fırçaya dönüşür.
          </p>
        </div>

        {/* İçerik blokları */}
        <div className="space-y-10 text-base md:text-lg leading-relaxed text-foreground">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sanat ile Bilimin Kesişiminde</h3>
            <p>
              Geleneksel sanat biçimleri duygu ve estetiğe dayanır. Kreatif kodlama ise matematiksel algoritmalar, rastgelelik ve tekrarlayan yapılarla bu estetiği dijital alana taşır. Bu da hem analitik hem yaratıcı düşünebilen bireyler yetiştirir.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Algoritmalarla Tasarlamak</h3>
            <p>
              Örüntüler, fraktallar, partikül sistemleri ve fizik simülasyonları gibi yapılar kullanılarak, yalnızca birkaç satır kodla kompleks ve etkileyici görsel kompozisyonlar üretilebilir. Bu süreçte kod bir tasarım aracı haline gelir.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Herkes İçin Ulaşılabilir</h3>
            <p>
              Kreatif kodlama için sanatçı ya da yazılımcı olmanıza gerek yok. Temel programlama bilgisiyle bile interaktif eserler üretmeye başlayabilirsiniz. P5.js gibi araçlar, düşük bariyerli ve öğrenmesi eğlenceli platformlardır.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Etki Alanları</h3>
            <p>
              Generatif sanat, veri görselleştirme, etkileşimli enstalasyonlar, eğitim teknolojileri, dijital sergiler ve performans sanatları gibi pek çok alanda kreatif kodlamanın etkisi hızla artıyor. Bu alanlar, hem sanatsal ifade hem de teknolojik üretim için yeni fırsatlar sunar.
            </p>
          </div>
        </div>

        {/* Vurgu cümlesi */}
        <div className="pt-6 border-t border-border text-center md:text-left">
          <p className="text-xl italic font-serif text-muted-foreground">
            “Kod, yalnızca makineye değil, hayal gücüne de yön verir.”
          </p>
        </div>
      </div>
    </section>
  );
};
