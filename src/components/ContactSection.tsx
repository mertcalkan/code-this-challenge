export const ContactSection = () => {
  return (
    <section id="contact" className="mt-20 py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl space-y-16">
        {/* Başlık ve Açıklama */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">İletişim</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Bize ulaşmak çok kolay! Atölye başvuruları, etkinlik önerileri veya iş birliği teklifleri için bizimle her zaman iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Grid Bilgi Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-base text-muted-foreground">
          <div className="p-6 rounded-lg bg-background border shadow-sm">
            <p className="font-medium text-foreground mb-2">E-posta</p>
            <a
              href="mailto:artorithm20@gmail.com"
              className="underline hover:text-primary transition"
            >
              artorithm20@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-lg bg-background border shadow-sm">
            <p className="font-medium text-foreground mb-2">Instagram</p>
            <a
              href="https://instagram.com/art.orithm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition"
            >
              @art.orithm
            </a>
          </div>

          <div className="p-6 rounded-lg bg-background border shadow-sm">
            <p className="font-medium text-foreground mb-2">P5.js Sketch Galerisi</p>
            <a
              href="https://editor.p5js.org/artorithm/sketches"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition"
            >
              editor.p5js.org
            </a>
          </div>
        </div>

        {/* Alttaki Vurgu Cümlesi */}
        <div className="pt-6 border-t border-border text-center md:text-left">
          <p className="text-xl italic text-muted-foreground">
            “Kodlarınızla iletişim kurun, çizgilerinizle paylaşın.”
          </p>
        </div>
      </div>
    </section>
  );
};
