import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-gula" />

              <span className="font-display text-2xl font-bold">
                Kopi Nuansa
              </span>
            </div>

            <p className="mt-4 max-w-sm text-cream/70">
              Ngopi, ngobrol, ngumpul. Tempat singgah hangat untuk
              menikmati kopi nusantara.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">
              Jelajahi
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#lokasi">Lokasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold">
              Kontak
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>call@kopinuansa.id</li>
              <li>+62 838 7167 0195</li>
              <li>Jl. Raya Bogor KM 46</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} Kopi Nuansa
        </div>

      </div>
    </footer>
  );
}