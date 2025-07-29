import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Obras() {
  // Sample data array - in a real app, this would likely come from an API or database
  const obras = [
    {
      id: 1,
      name: "magma_ficha",
      title: "BIG PARTNER AGUSTIN PEREZ-TORRES GIVES LECTURE ON ACTIVATING ROOFTOPS",
      description: "BIG Partner Agustin Perez-Torres spoke about CopenHill at the Reusing Rooftops conference in Barcelona, focusing on how the building not only contributes to the waste management and energy production of Copenhagen, but also offers a recreational space for residents and visitors on its roof. Co-organized by the Mies van der Rohe Foundation during Barcelona Architecture Weeks, the event was a part of a broader initiative to discuss the utilization of rooftops, including an international idea competition to redefine the urban spaces of Barcelona&apos;s Eixample district.",
      image: "/magma.png",
      year: "2010",
      icon: "/tenerife-icon.png"
    },
    {
      id: 2,
      name: "santisimo_redentor_ficha",
      title: "Iglesia Santísimo Redentor",
      description: "BIG Partner Agustin Perez-Torres spoke about CopenHill at the Reusing Rooftops conference in Barcelona, focusing on how the building not only contributes to the waste management and energy production of Copenhagen, but also offers a recreational space for residents and visitors on its roof. Co-organized by the Mies van der Rohe Foundation during Barcelona Architecture Weeks, the event was a part of a broader initiative to discuss the utilization of rooftops, including an international idea competition to redefine the urban spaces of Barcelona&apos;s Eixample district.",
      image: "/santisimo-redentor/santisimo-redentor.jpeg",
      year: "2010",
      icon: "/tenerife-icon.png"
  },
  {
    id: 3,
    title: "BIG PARTNER AGUSTIN PEREZ-TORRES GIVES LECTURE ON ACTIVATING ROOFTOPS",
    description: "BIG Partner Agustin Perez-Torres spoke about CopenHill at the Reusing Rooftops conference in Barcelona, focusing on how the building not only contributes to the waste management and energy production of Copenhagen, but also offers a recreational space for residents and visitors on its roof. Co-organized by the Mies van der Rohe Foundation during Barcelona Architecture Weeks, the event was a part of a broader initiative to discuss the utilization of rooftops, including an international idea competition to redefine the urban spaces of Barcelona&apos;s Eixample district.",
    image: "/plan-menis.png",
    year: "2010",
    icon: "/deutschland.png"
  },
  ];

  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div>
      <Navbar />
      <div className="bg-white px-4 sm:px-6 lg:px-40 py-12">
        {/* Map through obras array */}
      {obras.map((obra) => (
        <Link href={`/obras/${obra.name}`} key={obra.id}>
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image Column */}
              <div className="md:w-1/2">
                <Image
                  src={obra.image}
                  alt={obra.title}
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
              </div>

              {/* Content Column */}
              <div className="md:w-1/2 flex flex-col">
                <h2 className="text-lg font-medium text-gray-900 uppercase mb-4">
                  {obra.title}
                </h2>

                <p className="text-gray-600 mb-8">
                  {obra.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <div className="flex items-center">
                    <ArrowIcon />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">{obra.year}</span>
                    <Image
                      src={obra.icon}
                      alt="Tenerife Icon"
                      width={40}
                      height={40}
                      className="h-10 w-10 text-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
      <Footer />
    </div>
  )
}