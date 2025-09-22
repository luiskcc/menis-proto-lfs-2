import Link from "next/link";

export default function Navbar() {
return (
    <div className="fixed top-0 left-0 w-full z-50 "> 
      <header className="relative w-full bg-black/90  z-50 flex justify-between items-center">
      <div className="container mx-auto px-10 py-5 flex justify-between items-center w-full">
      {/* Logo */}
        <div>
          <Link href="/" className="text-white text-3xl font-roboto tracking-wide">
            FERNANDO MENIS
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8">
          {/* Search Icon */}
          <button className="text-white hover:text-red-600 transition-colors" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <path
                d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 font-roboto text-sm">
            <a href="#" className="text-white hover:text-red-600 transition-colors data-[active=true]:text-red-600"
              data-lang="es" data-active="true">ES</a>
            <span className="text-white">|</span>
            <a href="#" className="text-white hover:text-red-600 transition-colors" data-lang="en">EN</a>
          </div>

          {/* Hamburger Menu */}
          <button className="relative z-50 group" aria-controls="primary-navigation" aria-expanded="false">
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-white transition-all group-hover:bg-red-600 group-aria-expanded:rotate-45 group-aria-expanded:translate-y-2 group-aria-expanded:bg-red-600 group-aria-expanded:group-hover:bg-white"></span>
              <span className="block w-6 h-0.5 bg-white transition-all group-hover:bg-red-600 group-aria-expanded:opacity-0"></span>
              <span className="block w-6 h-0.5 bg-white transition-all group-hover:bg-red-600 group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-2 group-aria-expanded:bg-red-600 group-aria-expanded:group-hover:bg-white"></span>
            </div>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav id="primary-navigation"
          className="fixed top-0 right-0 w-1/5 h-full bg-black/95 hidden pt-24 data-[visible=true]:block">
          <ul className="flex flex-col gap-8 text-start ml-10 font-roboto">
            <li><a href="/obras" className="text-white hover:text-red-600 transition-colors text-2xl">Proyectos</a></li>
            <li><a href="/investigacion" className="text-white hover:text-red-600 transition-colors text-2xl">Lab</a></li>
            <li><a href="/sobre_nosotros" className="text-white hover:text-red-600 transition-colors text-2xl">Nosotros</a></li>
            <li><a href="/contacto" className="text-white hover:text-red-600 transition-colors text-2xl">Noticias</a></li>
          </ul>
        </nav>
        </div>
      </header>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
                const mobileNavToggle = document.querySelector('[aria-controls="primary-navigation"]');
                const primaryNav = document.querySelector('#primary-navigation');

                // Hamburger menu
                if (mobileNavToggle && primaryNav) {
                    mobileNavToggle.addEventListener('click', () => {
                        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
                        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
                        primaryNav.setAttribute('data-visible', !isExpanded);
                    });
                }

                // Language Toggle
                const languageLinks = document.querySelectorAll('[data-lang]');
                languageLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        languageLinks.forEach(l => l.setAttribute('data-active', 'false'));
                        link.setAttribute('data-active', 'true');
                    });
                });
            });
          `
        }}
      />
    </div>
  )
}
