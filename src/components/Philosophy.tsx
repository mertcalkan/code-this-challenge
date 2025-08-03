export const Philosophy = () => {
  return (
    <section id="values" className="bg-background py-24 px-6">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Başlık */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Değerlerimiz</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Sanatı ve teknolojiyi buluştururken benimsediğimiz değerler; topluluk, ifade özgürlüğü ve sürekli öğrenme üzerine kuruludur.
          </p>
        </div>

        {/* Grid Değerler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border-2 rounded-lg ">
            <h3 className="text-xl font-semibold mb-2">🌱 Merak ve Keşif</h3>
            <p className="text-muted-foreground">
              Öğrenme sürecimiz deneyimlemeye ve keşfetmeye dayanır. Kod, bir sonuca ulaşmanın değil, yaratıcı süreçlerin aracıdır.
            </p>
          </div>

          <div className="p-8 border-2 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🎨 Estetik ve İfade</h3>
            <p className="text-muted-foreground">
              Teknik bilgi, estetik duyarlılık ve bireysel ifade bir arada gelişir. Her tasarım bir fikrin yansımasıdır.
            </p>
          </div>

          <div className="p-8 border-2 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💡 Yaratıcılık Herkes İçin</h3>
            <p className="text-muted-foreground">
              Sanatçı olmasan da yaratıcı olabilirsin. Programlama herkesin görsel düş gücünü ifade edebileceği güçlü bir araçtır.
            </p>
          </div>

          <div className="p-8 border-2 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🤝 Topluluk Ruhu</h3>
            <p className="text-muted-foreground">
              Bilgiyi paylaşarak büyürüz. Paylaşım, geri bildirim ve birlikte üretme, öğrenme kültürümüzün temelidir.
            </p>
          </div>
        </div>

        {/* Bağlantılar */}
      
      </div>
    </section>
  );
};
