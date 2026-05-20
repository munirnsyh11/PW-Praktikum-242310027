import kopiSusu from "../assets/menu-kopi-susu.jpg";
import kopiTubruk from "../assets/menu-kopi-tubruk.jpg";
import cappuccino from "../assets/menu-cappuccino.jpg";

const menus = [
  {
    img: kopiSusu,
    name: "Es Kopi Susu Gula Aren",
    desc: "Espresso, susu segar, dan gula aren cair khas Nusantara.",
    price: "Rp 22.000",
    tag: "Signature",
  },
  {
    img: kopiTubruk,
    name: "Kopi Tubruk Toraja",
    desc: "Kopi hitam diseduh ala kampung — kuat, hangat, jujur.",
    price: "Rp 18.000",
    tag: "Klasik",
  },
  {
    img: cappuccino,
    name: "Cappuccino Nusantara",
    desc: "Espresso lembut dengan microfoam dan sentuhan rempah.",
    price: "Rp 28.000",
    tag: "Favorit",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="bg-gradient-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gula font-semibold">Menu Pilihan</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-espresso md:text-5xl">
            Secangkir untuk setiap suasana
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dari kopi tubruk yang jujur hingga es kopi susu yang manisnya pas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {menus.map((m) => (
            <article
              key={m.name}
              className="group rounded-3xl bg-card p-6 shadow-soft border border-border/50 hover:-translate-y-1 transition-transform"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-coffee backdrop-blur">
                  {m.tag}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="font-display text-xl font-semibold text-espresso">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
                <div className="flex items-center justify-between pt-3">
                  <span className="font-display text-lg font-bold text-gula">{m.price}</span>
                  <button className="text-sm font-medium text-espresso hover:text-gula transition-colors">
                    Tambah →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}