function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <React.Fragment>
            <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100' : 'bg-transparent py-6'}`} data-name="header" data-file="components/Header.js">
                <div className="container-wide flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-1">
                        <a href="index.html" className={`text-2xl md:text-3xl font-bold tracking-tight uppercase font-serif ${isScrolled ? 'text-[var(--brand-black)]' : 'text-[var(--brand-black)] md:text-[var(--brand-black)]'}`}>
                            Impressions
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 lg:space-x-12">
                        <a href="index.html" className="text-sm uppercase tracking-widest font-medium text-[var(--brand-black)] hover:text-gray-500 transition-colors">Home</a>
                        <a href="collection.html" className="text-sm uppercase tracking-widest font-medium text-[var(--brand-black)] hover:text-gray-500 transition-colors">Collection</a>
                        <a href="fitting.html" className="text-sm uppercase tracking-widest font-medium text-[var(--brand-black)] hover:text-gray-500 transition-colors">Fitting</a>
                        <a href="payment-delivery.html" className="text-sm uppercase tracking-widest font-medium text-[var(--brand-black)] hover:text-gray-500 transition-colors">Payment & Delivery</a>
                    </nav>

                    {/* Icons */}
                    <div className="flex-1 flex justify-end space-x-6 items-center text-[var(--brand-black)]">
                        {/* Search Removed */}
                        
                        <a href="cart.html" className="hover:opacity-70 transition-opacity relative">
                             <div className="icon-shopping-bag text-xl"></div>
                             <span className="absolute -top-1 -right-1 bg-[var(--brand-black)] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-none">2</span>
                        </a>
                        
                        {/* Burger Menu Trigger */}
                        <button 
                            className="md:hidden hover:opacity-70 transition-opacity"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <div className="icon-menu text-xl"></div>
                        </button>
                    </div>
                </div>
            </header>
            
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </React.Fragment>
    );
}