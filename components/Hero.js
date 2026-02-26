function Hero() {
    return (
        <section className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row bg-white" data-name="hero" data-file="components/Hero.js">
            
            {/* Desktop: Left Side Image / Mobile: Background Image */}
            <div className="absolute inset-0 md:relative md:w-1/2 h-full">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_17547ac760000001/af718bdb-02f9-4962-9ed5-06f129355b33.jpeg" 
                    alt="Tailored Suit Detail" 
                    className="w-full h-full object-cover"
                />
                {/* Mobile Overlay for readability */}
                <div className="absolute inset-0 bg-white/70 md:hidden backdrop-blur-[2px]"></div>
            </div>

            {/* Desktop: Right Side Content / Mobile: Overlay Content */}
            <div className="relative z-10 w-full md:w-1/2 h-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-20 md:py-0">
                <div className="max-w-xl text-[var(--brand-black)] text-center md:text-left">
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-6">Spring / Summer 2026</h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-serif">
                        Define Your <br/>
                        Presence.
                    </h1>
                    <p className="text-lg md:text-xl mb-10 font-light leading-relaxed text-gray-800">
                        Impeccable tailoring for the South African gentleman who commands the room without saying a word.
                    </p>
                    <a href="collection.html" className="btn-sharp inline-block bg-[var(--brand-black)] text-white hover:bg-gray-800 border-none">
                        Explore Collection
                    </a>
                </div>
            </div>
        </section>
    );
}