'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AvisosLegalesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold text-white mb-8 tracking-wide">
            Aviso Legal
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Introduction */}
          <div>
            <p className="text-gray-300 leading-relaxed">
              El presente Aviso Legal regula las condiciones generales de acceso y utilización del sitio web accesible
              en la dirección URL https://menis.es (en adelante, el sitio web), que FERNANDO MENIS, SLPU pone a disposición
              de los usuarios de Internet.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              La utilización del sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones
              incluidas en este Aviso Legal. En consecuencia, el usuario del sitio web debe leer atentamente el presente
              Aviso Legal en cada una de las ocasiones en que se proponga utilizar la web, ya que el texto podría sufrir
              modificaciones a criterio del titular de la web, o a causa de un cambio legislativo, jurisprudencial o en la práctica empresarial.
            </p>
          </div>

          {/* 1. Titularidad del Sitio Web */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              1. TITULARIDAD DEL SITIO WEB
            </h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Razón Social de la Empresa:</strong> FERNANDO MENIS, SLPU</p>
              <p><strong>Nombre del titular:</strong> FERNANDO MENIS</p>
              <p><strong>Domicilio social:</strong> CL ALVAREZ DE LUGO, 34 LOCAL 3</p>
              <p><strong>Población:</strong> Santa Cruz de Tenerife</p>
              <p><strong>Provincia:</strong> Santa Cruz de Tenerife</p>
              <p><strong>C.P.:</strong> 38004</p>
              <p><strong>C.I.F./D.N.I.:</strong> B76618719</p>
              <p><strong>Teléfono de contacto:</strong> 922288838</p>
              <p><strong>Correo electrónico:</strong> info@menis.es</p>
            </div>
          </div>

          {/* 2. Objeto */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              2. OBJETO
            </h2>
            <p className="text-gray-300 leading-relaxed">
              El sitio web facilita a los usuarios del mismo el acceso a información y servicios prestados por FERNANDO MENIS, SLPU
              a aquellas personas u organizaciones interesadas en los mismos.
            </p>
          </div>

          {/* 3. Acceso y Utilización de la Web */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              3. ACCESO Y UTILIZACIÓN DE LA WEB
            </h2>

            <h3 className="text-xl font-roboto font-medium text-white mb-3 mt-6">
              3.1. Carácter gratuito del acceso y utilización de la web
            </h3>
            <p className="text-gray-300 leading-relaxed">
              El acceso a la web tiene carácter gratuito para los usuarios de la misma.
            </p>

            <h3 className="text-xl font-roboto font-medium text-white mb-3 mt-6">
              3.2. Registro de usuarios
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Con carácter general el acceso y utilización de la web no exige la previa suscripción o registro de los usuarios de la misma.
            </p>
          </div>

          {/* 4. Contenidos de la Web */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              4. CONTENIDOS DE LA WEB
            </h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                El idioma utilizado por el titular en la web será el castellano. FERNANDO MENIS, SLPU no se responsabiliza
                de la no comprensión o entendimiento del idioma de la web por el usuario, ni de sus consecuencias.
              </p>
              <p className="leading-relaxed">
                FERNANDO MENIS, SLPU podrá modificar los contenidos sin previo aviso, así como suprimir y cambiar éstos
                dentro de la web, como la forma en que se accede a éstos, sin justificación alguna y libremente,
                no responsabilizándose de las consecuencias que los mismos puedan ocasionar a los usuarios.
              </p>
              <p className="leading-relaxed">
                Se prohíbe el uso de los contenidos de la web para promocionar, contratar o divulgar publicidad o información
                propia o de terceras personas sin la autorización de FERNANDO MENIS, SLPU, ni remitir publicidad o información
                valiéndose para ello de los servicios o información que se ponen a disposición de los usuarios,
                independientemente de si la utilización es gratuita o no.
              </p>
              <p className="leading-relaxed">
                Los enlaces o hiperenlaces que incorporen terceros en sus páginas web, dirigidos a esta web, serán para la
                apertura de la página web completa, no pudiendo manifestar, directa o indirectamente, indicaciones falsas,
                inexactas o confusas, ni incurrir en acciones desleales o ilícitas en contra de FERNANDO MENIS, SLPU.
              </p>
            </div>
          </div>

          {/* 5. Limitación de Responsabilidad */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              5. LIMITACIÓN DE RESPONSABILIDAD
            </h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Tanto el acceso a la web como el uso inconsentido que pueda efectuarse de la información contenida en la misma
                es de la exclusiva responsabilidad de quien lo realiza. FERNANDO MENIS, SLPU no responderá de ninguna consecuencia,
                daño o perjuicio que pudieran derivarse de dicho acceso o uso. FERNANDO MENIS, SLPU no se hace responsable
                de los errores de seguridad, que se puedan producir ni de los daños que puedan causarse al sistema informático
                del usuario (hardware y software), o a los ficheros o documentos almacenados en el mismo, como consecuencia de:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>la presencia de un virus en el ordenador del usuario que sea utilizado para la conexión a los servicios y contenidos de la web,</li>
                <li>un mal funcionamiento del navegador,</li>
                <li>y/o del uso de versiones no actualizadas del mismo.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                FERNANDO MENIS, SLPU no se hace responsable de la fiabilidad y rapidez de los hiperenlaces que se incorporen
                en la web para la apertura de otras. FERNANDO MENIS, SLPU no garantiza la utilidad de estos enlaces,
                ni se responsabiliza de los contenidos o servicios a los que pueda acceder el usuario por medio de estos enlaces,
                ni del buen funcionamiento de estas webs.
              </p>
              <p className="leading-relaxed">
                FERNANDO MENIS, SLPU no será responsable de los virus o demás programas informáticos que deterioren o puedan
                deteriorar los sistemas o equipos informáticos de los usuarios al acceder a su web u otras webs a las que se
                haya accedido mediante enlaces de esta web.
              </p>
            </div>
          </div>

          {/* 6. Empleo de la Tecnología Cookie */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              6. EMPLEO DE LA TECNOLOGÍA &ldquo;COOKIE&rdquo;
            </h2>
            <p className="text-gray-300 leading-relaxed">
              La web no emplea cookies ni cualquier otro procedimiento invisible de recogida de información cuando el usuario
              navega por ella, respetando en todo momento la confidencialidad e intimidad del mismo.
            </p>
          </div>

          {/* 7. Propiedad Intelectual e Industrial */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              7. PROPIEDAD INTELECTUAL E INDUSTRIAL
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Son propiedad de FERNANDO MENIS, SLPU, todos los derechos de propiedad industrial e intelectual de la web,
              así como de los contenidos que alberga. Cualquier uso de la web o sus contenidos deberá tener un carácter
              exclusivamente particular. Está reservado exclusivamente a FERNANDO MENIS, SLPU cualquier otro uso que suponga
              la copia, reproducción, distribución, transformación, comunicación pública o cualquier otra acción similar,
              de todo o parte de los contenidos de la web, por lo que ningún usuario podrá llevar a cabo estas acciones
              sin la autorización previa y por escrito de FERNANDO MENIS, SLPU.
            </p>
          </div>

          {/* 8. Política de Privacidad */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              8. POLÍTICA DE PRIVACIDAD Y PROTECCION DE DATOS
            </h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                FERNANDO MENIS, SLPU garantiza la protección y confidencialidad de los datos personales, de cualquier tipo
                que nos proporcionen nuestras empresas clientes de acuerdo con lo dispuesto en la Ley Orgánica 15/1999,
                de 13 de Diciembre de Protección de Datos de Carácter Personal.
              </p>
              <p className="leading-relaxed">
                Todos los datos facilitados por nuestras empresas clientes a FERNANDO MENIS, SLPU o a su personal,
                serán incluidos en un fichero automatizado de datos de carácter personal creado y mantenido bajo la
                responsabilidad de FERNANDO MENIS, SLPU, imprescindibles para prestar los servicios solicitados por los usuarios.
              </p>
              <p className="leading-relaxed">
                Los datos facilitados serán tratados según el Reglamento de Medidas de Seguridad (Real Decreto 1720/2007 de 21 de Diciembre),
                en este sentido FERNANDO MENIS, SLPU ha adoptado los niveles de protección que legalmente se exigen,
                y ha instalado todas las medidas técnicas a su alcance para evitar la perdida, mal uso, alteración,
                acceso no autorizado por terceros.
              </p>
              <p className="leading-relaxed">
                En cumplimiento de lo establecido en la RGPD, el usuario podrá ejercer sus derechos de acceso, rectificación,
                cancelación y oposición. Para ello debe de contactar con nosotros en info@menis.es
              </p>
            </div>
          </div>

          {/* 9. Legislación Aplicable */}
          <div className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-roboto font-bold text-red-600 mb-4">
              9. LEGISLACIÓN APLICABLE Y JURISDICCIÓN COMPETENTE
            </h2>
            <p className="text-gray-300 leading-relaxed">
              El presente Aviso Legal se interpretará y regirá de conformidad con la legislación española. FERNANDO MENIS, SLPU
              y los usuarios, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten al de los
              juzgados y tribunales del domicilio del usuario para cualquier controversia que pudiera derivarse del acceso o
              uso de la web. En el caso de que el usuario tenga su domicilio fuera de España, FERNANDO MENIS, SLPU y el usuario,
              se someten, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales del domicilio de FERNANDO MENIS, SLPU.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
