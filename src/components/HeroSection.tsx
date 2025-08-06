import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { videoWorks } from "@/data/videoWorks";

export const HeroSection = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    // Sayfa yüklendiğinde videoların ilk kareleri gösterilsin
    videoRefs.current.forEach((video) => {
      if (video) {
        video.load();
        video.pause();
        video.currentTime = 0;
      }
    });
  }, []);

  const rotations = [20, 12.5, 0, -12.5, -20];
  const scales = [1.1, 1.03, 1, 1.03, 1.1];
  const visibleVideoWorks = videoWorks.slice(0, 5);

  const handleTouch = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleTouchEnd = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="hero" className="container mx-auto px-4 pt-32 pb-16 bg-background">
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

      {/* Mobil veya tablet ise grid */}
      {isMobileOrTablet ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {visibleVideoWorks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="overflow-hidden bg-card border-border shadow-md cursor-pointer aspect-[3/4]"
              onTouchStart={() => handleTouch(index)}
              onTouchEnd={() => handleTouchEnd(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={artwork.video}
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-7 max-w-6xl mx-auto mb-12">
          {visibleVideoWorks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-700 hover:scale-110 cursor-pointer w-full aspect-[3/4]"
              style={{
                transform: `perspective(800px) rotateY(${rotations[index]}deg) scale(${scales[index]})`,
                transformStyle: "preserve-3d",
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={artwork.video}
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};
