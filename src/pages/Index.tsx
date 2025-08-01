import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import artCircles from "@/assets/art-circles.jpg";
import artSpiral from "@/assets/art-spiral.jpg";
import artRadial from "@/assets/art-radial.jpg";
import artFlower from "@/assets/art-flower.jpg";
import artMandala from "@/assets/art-mandala.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

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

        {/* Art Gallery - Grid Style */}
        <div className="grid grid-cols-5 gap-7 max-w-6xl mx-auto mb-12">
          {artworks.map((artwork, index) => {
            const rotations = [20, 12.5, 0, -12.5, -20];
            const scales = [1.1, 1.03, 1, 1.03, 1.1];

            return (
              <Card
                key={artwork.id}
                className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-110 cursor-pointer w-full aspect-[3/4]"
                style={{
                  transform: `perspective(800px) rotateY(${rotations[index]}deg) scale(${scales[index]})`,
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            );
          })}
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

          <div className="relative flex items-center justify-center">
            <button
              onClick={goToPrev}
              className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-3 py-2 rounded-full z-10 hover:bg-primary/80"
            >
              ←
            </button>

            <div className="w-full md:w-[600px] max-w-[90%] aspect-[4/3] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-500">
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={artworks[currentIndex].image}
                        alt={artworks[currentIndex].alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Generatif Sanat Projesi
                      </h3>
                      <p className="text-muted-foreground">
                        P5.js ve matematiksel algoritmalar kullanılarak oluşturulan interaktif sanat eseri.
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white px-3 py-2 rounded-full z-10 hover:bg-primary/80"
            >
              →
            </button>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate("/gallery")}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition"
            >
              Devamını Görün
            </Button>
          </div>
        </div>
      </section>

      {/* Other sections remain unchanged... */}
    </div>
  );
};

export default Index;
