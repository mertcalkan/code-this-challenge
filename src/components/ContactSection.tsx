export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="container mx-auto text-center max-w-xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">İletişim</h2>
        <p className="text-lg text-muted-foreground">
          Bizimle iletişime geçmek için aşağıdaki e-posta adresine yazabilirsiniz. Atölye başvuruları ve iş birlikleri için her zaman açığız.
        </p>
        <a
          href="mailto:info@artorithm.com"
          className="text-primary text-lg font-medium underline hover:text-primary/80"
        >
          info@artorithm.com
        </a>
      </div>
    </section>
  );
};
