'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold text-white mb-8 tracking-wide">
            Política de Privacidad
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Main Privacy Policy Content */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              En cumplimiento de lo establecido en la RGPD, le informamos que sus datos serán tratados en nuestros ficheros,
              con la finalidad del mantenimiento y cumplimiento de la relación con nuestra entidad, incluyendo el envío de
              comunicaciones en el marco de la citada relación.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Así mismo, sus datos serán cedidos en todos aquellos casos en que sea necesario para el desarrollo, cumplimiento
              y control de la relación con nuestra entidad o en los supuestos en que lo autorice una norma con rango de ley.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              En cumplimiento de la RGPD puede ejercitar sus derechos ARCO ante FERNANDO MENIS, SLPU, con dirección en
              CL ALVAREZ DE LUGO, 34 LOCAL 3, 38004 – Santa Cruz de Tenerife, adjuntando fotocopia de su DNI.
            </p>

            <p className="text-gray-300 leading-relaxed">
              El contenido de esta comunicación, así como el de toda la documentación anexa, está sujeta al deber de secreto
              y va dirigida únicamente a su destinatario. En el supuesto de que usted no fuera el destinatario, le solicitamos
              que nos lo indique y no comunique su contenido a terceros, procediendo a su destrucción.
            </p>
          </div>

          {/* Derechos ARCO Section */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              Derechos ARCO
            </h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Los usuarios tienen derecho a ejercer los siguientes derechos:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Acceso:</strong> Derecho a obtener confirmación sobre si se están tratando datos personales que le conciernen.</li>
                <li><strong>Rectificación:</strong> Derecho a solicitar la rectificación de los datos inexactos o a completar los datos personales incompletos.</li>
                <li><strong>Cancelación:</strong> Derecho a solicitar la supresión de sus datos personales cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> Derecho a oponerse al tratamiento de sus datos personales.</li>
              </ul>
            </div>
          </div>

          {/* Data Protection Section */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              Protección de Datos
            </h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                FERNANDO MENIS, SLPU garantiza la protección y confidencialidad de los datos personales, de cualquier tipo
                que nos proporcionen nuestras empresas clientes de acuerdo con lo dispuesto en la Ley Orgánica 15/1999,
                de 13 de Diciembre de Protección de Datos de Carácter Personal y el Reglamento General de Protección de Datos (RGPD).
              </p>
              <p className="leading-relaxed">
                Todos los datos facilitados por nuestras empresas clientes a FERNANDO MENIS, SLPU o a su personal,
                serán incluidos en un fichero automatizado de datos de carácter personal creado y mantenido bajo la
                responsabilidad de FERNANDO MENIS, SLPU.
              </p>
            </div>
          </div>

          {/* Security Measures Section */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              Medidas de Seguridad
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Los datos facilitados serán tratados según el Reglamento de Medidas de Seguridad (Real Decreto 1720/2007 de 21 de Diciembre),
              en este sentido FERNANDO MENIS, SLPU ha adoptado los niveles de protección que legalmente se exigen,
              y ha instalado todas las medidas técnicas a su alcance para evitar la perdida, mal uso, alteración,
              acceso no autorizado por terceros. No obstante, el usuario debe ser consciente de que las medidas de seguridad
              en Internet no son inexpugnables.
            </p>
          </div>

          {/* Additional Information Section */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              Información Adicional
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              El prestador de servicios de la sociedad de la información deberá tener en cuenta que, además de la información
              que facilite a los destinatarios del servicio a través de su &ldquo;Política de Privacidad&rdquo;, deberá disponer de textos
              legales adicionales relativos a otras normativas de obligado cumplimiento, tales como, sin carácter limitativo
              o excluyente, condiciones generales de la contratación, propiedad intelectual e industrial, condiciones de
              utilización de la página web y responsabilidades al respecto, o lo que la propia Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y de Comercio Electrónico pueda establecer en cualesquiera otros
              preceptos al margen de su artículo 10 o incluso completar la información que, en relación a éste, fuese necesaria.
            </p>
          </div>

          {/* Contact Information */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              Contacto
            </h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Razón Social:</strong> FERNANDO MENIS, SLPU</p>
              <p><strong>Dirección:</strong> CL ALVAREZ DE LUGO, 34 LOCAL 3</p>
              <p><strong>C.P.:</strong> 38004 - Santa Cruz de Tenerife</p>
              <p><strong>Teléfono:</strong> 922288838</p>
              <p><strong>Email:</strong> <a href="mailto:info@menis.es" className="text-red-600 hover:text-red-500 transition-colors duration-300">info@menis.es</a></p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
