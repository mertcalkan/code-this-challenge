import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
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

        {/* Art Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {artworks.map((artwork, index) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden bg-card border-border shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="accent" 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Daha fazla
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-accent/50 rounded-full animate-ping"></div>
      <div className="fixed bottom-32 left-20 w-3 h-3 bg-accent/20 rounded-full animate-bounce"></div>
      <div className="fixed bottom-20 right-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Index;