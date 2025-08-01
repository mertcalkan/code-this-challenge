import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import artCircles from "@/assets/art-circles.jpg";
import artSpiral from "@/assets/art-spiral.jpg";
import artRadial from "@/assets/art-radial.jpg";
import artFlower from "@/assets/art-flower.jpg";
import artMandala from "@/assets/art-mandala.jpg";

const Index = () => {
  const artworks = [
    {
      id: 1,
      image: artCircles,
      alt: "Concentric circles algorithmic art"
    },
    {
      id: 2,
      image: artSpiral,
      alt: "Purple spiral vortex algorithmic art"
    },
    {
      id: 3,
      image: artRadial,
      alt: "Green radial lines algorithmic art"
    },
    {
      id: 4,
      image: artFlower,
      alt: "Yellow flower pattern algorithmic art"
    },
    {
      id: 5,
      image: artMandala,
      alt: "Geometric mandala algorithmic art"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-serif italic text-foreground mb-6 tracking-wide">
            Artorithm
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
            Kodla <span className="italic font-serif">Sanat</span> Üretin!
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Algoritmaların gücüyle sanatı yeniden tanımlayın.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              P5.js, Processing ve GLSL ile yaratıcılığınızın sınırlarını keşfedin.
            </p>
          </div>
        </div>

        {/* Art Gallery - Exhibition Style */}
        <div className="relative max-w-6xl mx-auto h-[600px] mb-12">
          {artworks.map((artwork, index) => {
            const positions = [
              // İlk kutu: hafif aşağıya kaydırılmış ve sola hafif eğimli
              { transform: 'translate-y-16 -rotate-6', left: '5%', top: '20%' },
              // İkinci kutu: biraz yukarıda ve sağa eğimli  
              { transform: 'translate-y-4 rotate-12', left: '25%', top: '10%' },
              // Üçüncü kutu: en altta ve düz
              { transform: 'translate-y-32 rotate-0', left: '45%', top: '35%' },
              // Dördüncü kutu: yukarıda ve sola eğimli
              { transform: '-translate-y-8 -rotate-12', left: '65%', top: '5%' },
              // Beşinci kutu: ortada ve sağa eğimli
              { transform: 'translate-y-12 rotate-6', left: '80%', top: '25%' }
            ];
            
            return (
              <Card 
                key={artwork.id} 
                className={`group absolute overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-110 cursor-pointer w-48 h-64 ${positions[index].transform}`}
                style={{
                  left: positions[index].left,
                  top: positions[index].top,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Kreatif Kodlama Nedir */}
      <section id="creative-coding" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Kreatif Kodlama Nedir?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Kreatif kodlama, sanat ve teknolojinin buluştuğu nokta. Matematiksel algoritmaları, veri yapılarını ve programlama dillerini kullanarak görsel sanat eserleri, interaktif deneyimler ve dijital yaratımlar oluşturma sanatıdır.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Algoritmik Sanat</h3>
                <p className="text-muted-foreground">
                  Matematiksel formüller ve algoritmalar kullanarak benzersiz görsel kompozisyonlar yaratın.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">İnteraktif Deneyimler</h3>
                <p className="text-muted-foreground">
                  Kullanıcı etkileşimleriyle değişen, canlı ve dinamik dijital sanat eserleri oluşturun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışmalarımız */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Çalışmalarımız
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Algoritmalar ve kod ile yarattığımız sanat eserlerini keşfedin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.slice(0, 3).map((artwork) => (
              <Card key={artwork.id} className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Generatif Sanat Projesi</h3>
                  <p className="text-muted-foreground">
                    P5.js ve matematiksel algoritmalar kullanılarak oluşturulan interaktif sanat eseri.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Felsefemiz */}
      <section id="values" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Felsefemiz
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Kod ve sanatın birleşiminde sınırsız yaratıcılık olduğuna inanıyoruz. Her algoritma bir fırça darbesi, her fonksiyon bir renk karışımıdır.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Yaratıcılık</h3>
                <p className="text-muted-foreground">Sınırları zorlamak ve yeni ifade biçimleri keşfetmek</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Teknoloji</h3>
                <p className="text-muted-foreground">Modern araçları sanatsal ifadenin hizmetinde kullanmak</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">İnovasyon</h3>
                <p className="text-muted-foreground">Sürekli öğrenme ve gelişim ile yenilikçi çözümler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              İletişim
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Kreatif kodlama dünyasında birlikte yolculuğa çıkmaya hazır mısınız?
            </p>
            
            <div className="space-y-6">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl font-semibold w-full md:w-auto"
              >
                Bizimle İletişime Geçin
              </Button>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
                <div>📧 hello@artorithm.com</div>
                <div>📱 +90 555 123 45 67</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-accent/50 rounded-full animate-ping"></div>
      <div className="fixed bottom-32 left-20 w-3 h-3 bg-accent/20 rounded-full animate-bounce"></div>
      <div className="fixed bottom-20 right-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Index;