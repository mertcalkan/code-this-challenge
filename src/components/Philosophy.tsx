export const Philosophy = () => {
  return (
    <section id="values" className="bg-background py-24 px-6">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Başlık */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold ">Değerlerimiz</h2>
          
        </div>

        {/* Grid Değerler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    {
      title: "Merak ve Keşif",
      text: "Öğrenme sürecimiz deneyimlemeye ve keşfetmeye dayanır. Kod, bir sonuca ulaşmanın değil, yaratıcı süreçlerin aracıdır.",
    },
    {
      title: "Estetik ve İfade",
      text: "Teknik bilgi, estetik duyarlılık ve bireysel ifade bir arada gelişir. Her tasarım bir fikrin yansımasıdır.",
    },
    {
      title: "Yaratıcılık Herkes İçin",
      text: "Sanatçı olmasan da yaratıcı olabilirsin. Programlama herkesin görsel düş gücünü ifade edebileceği güçlü bir araçtır.",
    },
    {
      title: "Topluluk Ruhu",
      text: "Bilgiyi paylaşarak büyürüz. Paylaşım, geri bildirim ve birlikte üretme, öğrenme kültürümüzün temelidir.",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="p-8 rounded-2xl bg-background shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_8px_rgba(0,0,0,0.1)] transition "
    >
      <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-center">{item.text}</p>
    </div>
  ))}
</div>


        {/* Bağlantılar */}
      
      </div>
    </section>
  );
};
