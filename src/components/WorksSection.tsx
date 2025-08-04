import { useNavigate } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { Button } from "@/components/ui/button";

export const WorksSection = () => {
  const navigate = useNavigate();

  const heights = [
    ["h-[40%]", "h-[60%]"], // 1. sütun: 2+3
    ["h-[60%]", "h-[40%]"], // 2. sütun: 3+2
    ["h-[40%]", "h-[60%]"], // 3. sütun: 2+3
    ["h-[60%]", "h-[40%]"], // 4. sütun: 3+2
  ];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[600px] mb-12">
          {Array.from({ length: 4 }).map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 h-full">
              {[0, 1].map((rowIdx) => {
                const index = colIdx * 2 + rowIdx;
                const height = heights[colIdx][rowIdx];
                const art = artworks[index];

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-xl bg-muted ${height}`}
                  >
                    <img
                      src={art.image}
                      alt={art.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="text-center">
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
