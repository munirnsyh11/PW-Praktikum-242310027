import aboutImg from "../assets/about-cafe.jpg";
import { Leaf, HandHeart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Biji Pilihan",
    desc: "Roasted in-house dari petani lokal Gayo, Kintamani, dan Toraja.",
  },
  {
    icon: HandHeart,
    title: "Diseduh Sepenuh Hati",
    desc: "Setiap cangkir dibuat oleh barista yang mencintai prosesnya.",
  },
  {
    icon: Sparkles,
    title: "Ruang Hangat",
    desc: "Tempat untuk ngobrol panjang, kerja, atau sekadar menyendiri.",
  },
];

export function AboutSection() {
  return (
    <section id="tentang" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-24 md:grid-cols-2 md:items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Suasana kedai Kopi Nuansa"
              loading="lazy"
              width={1000}
              height={900}
              className="h-[350px] md:h-[500px] w-full rounded-3xl object-cover shadow-warm"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gula">
              Tentang Kami
            </span>

            <h2 className="mt-3 font-display text-4xl font-bold text-espresso md:text-5xl">
              Kopi yang dekat,
              <br />
              cerita yang hangat.
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Kopi Nuansa lahir dari kecintaan pada kopi nusantara dan
              keinginan menciptakan ruang yang sederhana namun bermakna.
              Kami percaya setiap tegukan kopi adalah jeda — momen untuk
              benar-benar hadir.
            </p>

            <div className="mt-8 space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coffee/10 text-coffee">
                    <v.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-semibold text-espresso">
                      {v.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}