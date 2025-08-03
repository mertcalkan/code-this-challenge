import { Card } from "@/components/ui/card";
import { useState } from "react";
import { artworks } from "@/data/artworks";


export const HeroSection = () => {
  const rotations = [20, 12.5, 0, -12.5, -20];
  const scales = [1.1, 1.03, 1, 1.03, 1.1];

  return (
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

      <div className="grid grid-cols-5 gap-7 max-w-6xl mx-auto mb-12">
        {artworks.map((artwork, index) => (
          <Card
            key={artwork.id}
            className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-110 cursor-pointer w-full aspect-[3/4]"
            style={{
              transform: `perspective(800px) rotateY(${rotations[index]}deg) scale(${scales[index]})`,
              transformStyle: "preserve-3d",
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
        ))}
      </div>
    </section>
  );
};
