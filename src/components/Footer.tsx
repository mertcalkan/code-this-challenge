export const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-background border-t border-border text-center text-sm text-muted-foreground">
      <p>
        Bu websitesi{" "}
        <a
          href="https://mertcalkan.github.io" // Kendi sitenin URL'sini buraya yaz
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition"
        >
          Mert Calkan
        </a>{" "}
        tarafından yapılmıştır.
      </p>
    </footer>
  );
};
