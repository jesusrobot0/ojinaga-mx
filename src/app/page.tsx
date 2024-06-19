import Image from "next/image";
import { italicFont } from "@/config/fonts";

export default function HomePage() {
  return (
    <main className="w-screen h-screen flex justify-center items-center text-[#222] bg-[#f8f1e7]">
      <section className="flex flex-col gap-4 text-center font-light">
        <Image
          src="/icons/sun.png"
          alt="Logo del sitio que representa sol sonriente con gafas de sol, simbolizando alegría y energía positiva."
          width={180 / 2}
          height={180 / 2}
          className="mx-auto mb-5"
        />
        <h1 className="flex flex-col gap-4 text-3xl sm:text-4xl sm:flex-row">
          <span className="font-extrabold uppercase">
            Ojinaga
            <span className="text-4xl leading-[0px] text-red-500 font-extrabold">
              .
            </span>
            MX
          </span>
          <span className="hidden font-extralight sm:block"> | </span>
          <span className="italic">Próximamente</span>
        </h1>

        <h2 className="text-xl sm:text-2xl">
          Explora, Conecta
          <span className={`${italicFont.className}`}> & </span>
          <span className="font-semibold">Disfruta</span>
        </h2>

        <p className="text-xl sm:text-2xl mt-4">
          Para saber más{" "}
          <a
            href="mailto:hola@ojinaga.mx"
            className="font-bold hover:underline"
          >
            hola@ojinaga.mx
          </a>
        </p>
      </section>
    </main>
  );
}
