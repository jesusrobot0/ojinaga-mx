import { Cormorant_Garamond } from "next/font/google";

const italicFont = Cormorant_Garamond({ weight: ["300"], subsets: ["latin"] });

export default function ProximamentePage() {
  return (
    <main className="w-screen h-screen flex justify-center items-center text-[#222] bg-[#f8f1e7]">
      <section className="flex flex-col gap-4 text-center font-light">
        <h1 className="text-4xl">
          <span className="font-extrabold">
            <span className="uppercase">Ojinaga</span>.MX
          </span>
          <span> | </span>
          <span className="italic">Próximamente</span>
        </h1>

        <p className="text-2xl ">
          Conecta, Explora
          <span className={`${italicFont.className}`}> & </span>
          <span className="font-semibold">Disfruta</span>
        </p>
        <p className="text-2xl">
          Para saber más:{" "}
          <a href="mailto:hola@ojinaga.mx" className="font-bold">
            hola@ojinaga.mx
          </a>
        </p>
      </section>
    </main>
  );
}
