import heroImg from "../assets/hero-coffee.jpg";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden bg-gradient-cream"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        
        {/* Text */}
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-coffee">
            <span className="h-1.5 w-1.5 rounded-full bg-gula" />
            Sejak 2005 · Nusantara
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-espresso md:text-7xl">
            Ngopi, <em className="not-italic text-gula">Ngobrol</em>,
            <br />
            Ngumpul.
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            Secangkir kopi nusantara yang menemani setiap obrolan hangat.
            Diseduh dengan rasa, disajikan dengan cerita.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-coffee px-7 py-3.5 text-sm font-medium text-cream shadow-soft transition-all hover:bg-espresso"
            >
              Lihat Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#cerita"
              className="inline-flex items-center rounded-full border border-coffee/30 px-7 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-coffee/5"
            >
              Cerita Kami
            </a>
          </div>

          <div className="flex gap-8 pt-6">
            {[
           
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-espresso">
                  {s.n}
                </div>

                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-warm opacity-20 blur-2xl" />

          <img
            src={heroImg}
            alt="Secangkir kopi nusantara"
            width={1536}
            height={1024}
            className="relative h-[500px] w-full rounded-[2rem] object-cover shadow-warm"
          />
        </div>

      </div>
    </section>
  );
}