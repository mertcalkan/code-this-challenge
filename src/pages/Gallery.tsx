import { Card } from "@/components/ui/card";
import { artworks } from "@/data/artworks";

export const GalleryPage = () => {
  return (
    <section className="min-h-screen bg-background py-24 px-6">
      <div className="container mx-auto max-w-7xl space-y-12">
        {/* Başlık ve Açıklama */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">Sanat Galerisi</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            İşte algoritmalarla üretilmiş çalışmalarımızdan seçkiler. Görseller p5.js, Processing ve GLSL kullanılarak oluşturulmuştur.
          </p>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map((art, index) => (
            <Card
              key={art.id}
              className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-700 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={art.image}
                  alt={art.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Generatif Proje #{index + 1}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Algoritmik olarak oluşturulmuş görsel sanat çalışması.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
