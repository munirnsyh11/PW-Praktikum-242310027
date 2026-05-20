import { MapPin, Clock, Phone } from "lucide-react";

const outlets = [
  { city: "Bogor", addr: "Jl. Raya Bogor KM 46, Jawa Barat", hour: "07.00 — 23.00" },

];

export function LocationSection() {
  return (
    <section id="lokasi" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gula font-semibold">Singgah</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-espresso md:text-5xl">
              Temui kami di kotamu
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kami tumbuh perlahan, dari satu kedai kecil menjadi tempat singgah
              bagi banyak cerita.
            </p>
            <a
              href="tel:+622112345678"
              className="mt-6 inline-flex items-center gap-2 text-espresso hover:text-gula transition-colors"
            >
              <Phone className="h-4 w-4" /> +6283871670195
            </a>
          </div>

          <div className="grid gap-3">
            {outlets.map((o) => (
              <div
                key={o.city}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 hover:border-gula transition-colors"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-coffee text-cream group-hover:bg-gula transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-espresso">{o.city}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.addr}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-coffee">
                    <Clock className="h-3.5 w-3.5" /> {o.hour}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}