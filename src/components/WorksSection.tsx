import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { artworks } from "@/data/artworks";




export const WorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));

  return (
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
  );
};
