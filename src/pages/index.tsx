import { useMemo, useState } from "react";
import Image from "next/image";

const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "raices", label: "Por qué lo hacemos" },
  { id: "evento", label: "El evento" },
  { id: "galeria", label: "Galería" },
  { id: "ayudar", label: "Cómo ayudar" },
  { id: "contacto", label: "Contacto" },
];

const galleryItems = [
  { title: "Juegos en la plaza", image: "/images/juegos.jpg" },
  {
    title: "Voluntariado organizando alimentos",
    image: "/images/voluntariado.jpg",
  },
  { title: "Pintacaritas y arte", image: "/images/pintacaritas.jpg" },
  { title: "Regalos envueltos", image: "/images/regalos.jpg" },
  { title: "Actividades en familia", image: "/images/familia.jpg" },
  { title: "Momentos de alegría", image: "/images/alegria.jpg" },
];

export default function IndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            onClick={() => handleNav("inicio")}
            aria-label="Ir al inicio"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt="Por amor a mi pueblo"
              width={150}
              height={150}
              className="h-auto w-15"
              priority
            />
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => handleNav(n.id)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("ayudar")}
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              Quiero ayudar
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 shadow-sm"
            >
              <span className="sr-only">Menú</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3">
                {nav.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => handleNav(n.id)}
                    className="w-full rounded-md px-2 py-2 text-left text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {n.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav("ayudar")}
                  className="w-full rounded-md bg-emerald-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-emerald-700"
                >
                  Quiero ayudar
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20 lg:px-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Alegría y esperanza para niñas y niños en Chinautla
              </h1>
              <p className="text-lg leading-relaxed text-slate-700">
                Cada diciembre llevamos juguetes, comida y actividades a la
                plaza de Chinautla para celebrar juntos y compartir en
                comunidad.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("ayudar")}
                  className="rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
                >
                  Quiero donar
                </button>
                <button
                  onClick={() => scrollTo("evento")}
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400"
                >
                  Ver cómo funciona
                </button>
              </div>
              <p className="text-sm text-slate-500">
                Próxima fecha: 21 de diciembre · Plaza de Chinautla
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/images/regalo.jpg"
                    alt="Niñas y niños recibiendo regalos y alimentos"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
                  <p className="text-sm text-slate-700">
                    Chinautla, Guatemala – Donaciones abiertas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="inicio-2"
          className="h-120 relative bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat"
        ></section>
        <section id="raices" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                ¿Por qué lo hacemos en Chinautla?
              </h2>
              <p className="text-slate-700">
                Nuestra familia tiene raíces profundas en Chinautla. Crecimos
                entre sus calles, su plaza y su gente. Cada diciembre volvemos
                para acompañar, agradecer y compartir con las niñas, niños y
                familias de la comunidad.
              </p>
              <p className="text-slate-700">
                Con el apoyo de familia, amistades y aliados, año con año organizamos una
                jornada solidaria que reúne juegos, regalos y alimentos. Tu
                ayuda hace posible que lleguemos a más hogares con cariño y
                respeto.
              </p>

              <div className="overflow-hidden rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-teal-50 p-6 shadow">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Un puente entre nuestras raíces y nuestro presente
                </p>
                <p className="mt-2 text-slate-700">
                  Cada donación sostiene esta tradición y permite que más
                  familias reciban una Navidad con propósito. Gracias por ser
                  parte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="evento">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              ¿En qué consiste el evento?
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Actividades para niñas y niños
                </h3>
                <p className="mt-2 text-slate-700">
                  Fútbol, encostalados, búsqueda del tesoro, pintacaritas y arte
                  para celebrar jugando en comunidad.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Entrega de regalos y refacción
                </h3>
                <p className="mt-2 text-slate-700">
                  Con fila organizada, cada niña y niño recibe un regalo y una
                  refacción preparada con cariño.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Organización comunitaria
                </h3>
                <p className="mt-2 text-slate-700">
                  Voluntariado, logística y seguridad coordinadas para que el
                  evento sea ordenado y seguro para todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Galería de fotos
              </h2>
              <p className="mt-3 text-slate-700">
                Recuerdos de ediciones anteriores: juegos, organización y mucha
                alegría en la plaza.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {galleryItems.map((item) => (
                <figure
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-center text-xs font-medium text-slate-600">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="ayudar">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                ¿Cómo puedes ayudar?
              </h2>
              <p className="mt-3 text-slate-700">
                Puedes apoyar con donaciones o sumarte como voluntariado el día
                del evento.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Donaciones
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Aceptamos juguetes, alimentos, útiles escolares o aportes
                    para logística.
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
                    <li>Juguetes nuevos o en buen estado</li>
                    <li>Refacciones y bebidas</li>
                    <li>Útiles y materiales de arte</li>
                  </ul>
                </div>
                {/* <div className="mt-6">
                  <button
                    onClick={() => scrollTo("contacto")}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-slate-400"
                  >
                    Ver datos para donar
                  </button>
                </div> */}
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Voluntariado
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Súmate el día del evento para apoyar en actividades y
                    logística.
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
                    <li>Juegos y actividades con niñas y niños</li>
                    <li>Apoyo en filas y entrega de regalos</li>
                    <li>Montaje y desmontaje</li>
                    <li>Logística y seguridad</li>
                  </ul>
                </div>
                {/* <div className="mt-6">
                  <button
                    onClick={() => scrollTo("contacto")}
                    className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                  >
                    Quiero ser voluntario
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Contacto
              </h2>
              <p className="mt-3 text-slate-700">
                Escríbenos para coordinar donaciones o voluntariado. Te
                responderemos a la brevedad.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                <p className="mt-1 text-slate-700">+502 4149 3600</p>
                <span
                  onClick={() => {
                    const phone = '50241493600'
                    const message = encodeURIComponent('Hola, me gustaría hacer una donación ❤️😊')
                    const appLink = `whatsapp://send?phone=${phone}&text=${message}`
                    const webLink = `https://wa.me/${phone}?text=${message}`

                    window.location.href = appLink

                    setTimeout(() => {
                      window.location.href = webLink
                    }, 800)
                  }}
                  className="mt-2 inline-block cursor-pointer text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
                >
                  Enviar mensaje
                </span>
              </div>
              {/* <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Correo</p>
                <a
                  href="mailto:donaciones@chinautla.org"
                  className="mt-1 block text-slate-700"
                >
                  donaciones@chinautla.org
                </a>
                <a
                  href="mailto:donaciones@chinautla.org"
                  className="mt-2 inline-block text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
                >
                  Escribir correo
                </a>
              </div> */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Instagram
                </p>
                <p className="mt-1 text-slate-700">@por.amor.a.mi.pueblo</p>
                <span
                  onClick={() => {
                    const appLink = 'instagram://user?username=por.amor.a.mi.pueblo'
                    const webLink = 'https://www.instagram.com/por.amor.a.mi.pueblo'

                    window.location.href = appLink

                    setTimeout(() => {
                      window.location.href = webLink
                    }, 800)
                  }}
                  className="mt-2 inline-block cursor-pointer text-sm font-medium text-teal-700 underline-offset-4 hover:underline"
                >
                  Ver perfil
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 text-sm sm:flex-row sm:px-6 lg:px-8">
          <div className="space-y-1">
            <p>Evento comunitario en Chinautla · Guatemala</p>
            <p>
              Gracias por sumar tu ayuda para crear una Navidad con propósito.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("inicio")}
              className="font-medium text-teal-400 underline-offset-4 hover:underline"
            >
              Volver arriba
            </button>
            <span className="text-slate-400">© {year} Chinautla Solidaria</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
