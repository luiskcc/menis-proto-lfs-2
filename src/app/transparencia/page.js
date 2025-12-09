'use client';

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TransparenciaPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold text-white mb-8 tracking-wide">
            Portal de Transparencia
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl font-roboto">
            Este portal se ha creado siguiendo las indicaciones de Comisionado de Transparencia del Gobierno de Canarias
            y en cumplimiento con la Ley 12/2014, de 26 de diciembre, de transparencia y de acceso a la información pública,
            del Gobierno de Canarias.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="pb-16 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 items-center text-gray-300">
            <a href="#organigrama" className="text-lg hover:text-red-600 transition-colors duration-300 font-roboto">
              Organigrama
            </a>
            <span className="text-gray-600">|</span>
            <a href="#informacion" className="text-lg hover:text-red-600 transition-colors duration-300 font-roboto">
              Información
            </a>
          </div>
        </div>
      </section>

      {/* Last Update Notice */}
      <section className="pb-12 px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-400 font-roboto tracking-wider">
            Última actualización realizada el 04/2024
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-20 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-xl font-roboto font-medium text-white mb-4">
                Estructura orgánica objeto social
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Su actividad económica pertenece al CNAE 7111 – Servicios técnicos de arquitectura
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-xl font-roboto font-medium text-white mb-4">
                Información en materia organizativa
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Normativa aplicable y objeto social de la empresa
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-xl font-roboto font-medium text-white mb-4">
                Información económico-financiera
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cuentas anuales y auditoría
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-xl font-roboto font-medium text-white mb-4">
                Información de los contratos
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Contratos con administraciones públicas
              </p>
            </div>

            {/* Card 5 */}
            <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-xl font-roboto font-medium text-white mb-4">
                Convenios y encomiendas de gestión
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                La empresa no cuenta en el 2021 con ningún convenio formalizado con entidades públicas
              </p>
            </div>

            {/* Card 6 */}
            <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
              <h3 className="text-xl font-roboto font-medium text-white mb-4">
                Ayudas y subvenciones
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Información sobre ayudas y subvenciones recibidas
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="pb-20 px-12" id="informacion">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Estructura orgánica - Objeto social */}
          <div className="border-t border-white/10 pt-12" id="organigrama">
            <h2 className="text-3xl font-roboto font-bold text-white mb-6">
              Estructura orgánica - Objeto social
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Su actividad económica pertenece al CNAE 7111 – Servicios técnicos de arquitectura y desempeña,
              por lo tanto, el ejercicio de la actividad propia de los profesionales arquitectos.
            </p>
          </div>

          {/* Información en materia organizativa */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-3xl font-roboto font-bold text-white mb-6">
              Información en materia organizativa
            </h2>

            <h3 className="text-xl font-roboto font-medium text-red-600 mb-4">
              NORMATIVA APLICABLE
            </h3>
            <p className="text-gray-400 text-sm mb-2">(Última actualización realizada el 04/2024)</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ley 2/2007, de 15 de Marzo, de Sociedades Profesionales. Ley estatal 19/2013, de 9 de diciembre,
              de transparencia, acceso a la información pública y buen gobierno. Ley Canaria 12/2014, de 26 de diciembre,
              de transparencia y de acceso a la información pública.
            </p>

            <h3 className="text-xl font-roboto font-medium text-red-600 mb-4 mt-8">
              OBJETO SOCIAL
            </h3>
            <p className="text-gray-400 text-sm mb-2">(Última actualización realizada el 04/2024)</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Su actividad económica pertenece al CNAE 7111 – Servicios técnicos de arquitectura y desempeña,
              por lo tanto, el ejercicio de la actividad propia de los profesionales arquitectos.
            </p>

            <h3 className="text-xl font-roboto font-medium text-red-600 mb-4 mt-8">
              CONTRATOS CON ADMINISTRACIONES PÚBLICAS – MODIFICACIONES
            </h3>
            <p className="text-gray-400 text-sm mb-2">(Última actualización realizada el 04/2024)</p>
            <p className="text-gray-300 leading-relaxed">
              La empresa no cuenta en el 2021 con ningún convenio formalizado con entidades públicas.
            </p>
          </div>

          {/* Información económico-financiera */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-3xl font-roboto font-bold text-white mb-6">
              Información económico – financiera
            </h2>
            <p className="text-gray-400 text-sm mb-6">(Última actualización realizada el 04/2024)</p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Según se especifica en el artículo 263 del Real Decreto Legislativo 1/2010, de 2 de julio,
              por el que se aprueba el texto refundido de la Ley de Sociedades de Capital, Artículo 263. Auditor de cuentas.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Las cuentas anuales y, en su caso, el informe de gestión deberán ser revisados por auditor de cuentas.
              Se exceptúa de esta obligación a las sociedades que durante dos ejercicios consecutivos reúnan,
              a la fecha de cierre de cada uno de ellos, al menos dos de las circunstancias siguientes:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 pl-4">
              <li>Que el total de las partidas del activo no supere los dos millones ochocientos cincuenta mil euros.</li>
              <li>Que el importe neto de su cifra anual de negocios no supere los cinco millones setecientos mil euros.</li>
              <li>Que el número medio de trabajadores empleados durante el ejercicio no sea superior a cincuenta.</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-8">
              Fernando Menis SLPU no reúne ninguna de las circunstancias reflejadas en los apartados anteriores
              y por tanto no realiza auditoría de cuentas y de fiscalización por los órganos de control externo.
            </p>

            <h3 className="text-xl font-roboto font-medium text-red-600 mb-4">
              Cuentas anuales
            </h3>
            <p className="text-gray-400 text-sm mb-4">(Última actualización realizada el 04/2024)</p>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-red-600 transition-colors duration-300">
                Ver cuentas Anuales 2022
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-600 transition-colors duration-300">
                Ver cuentas Anuales 2021
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
