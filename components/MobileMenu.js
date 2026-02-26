function MobileMenu({ isOpen, onClose }) {
    return (
        <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`} data-name="mobile-menu" data-file="components/MobileMenu.js">
            {/* Backdrop */}
            <div 
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                {/* Close Button */}
                <div className="flex justify-end p-6">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <div className="icon-x text-2xl text-[var(--brand-black)]"></div>
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col px-8 py-4 space-y-6">
                    {[
                        { name: "Home", href: "index.html", delay: "delay-[100ms]" },
                        { name: "Collection", href: "collection.html", delay: "delay-[150ms]" },
                        { name: "Fitting", href: "fitting.html", delay: "delay-[200ms]" },
                        { name: "Payment & Delivery", href: "payment-delivery.html", delay: "delay-[250ms]" },
                        { name: "Cart", href: "cart.html", delay: "delay-[300ms]" }
                    ].map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.href}
                            className={`text-xl font-serif font-bold uppercase tracking-wide text-[var(--brand-black)] transform transition-all duration-500 ${isOpen ? `translate-x-0 opacity-100 ${link.delay}` : 'translate-x-10 opacity-0'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="mt-auto p-8 border-t border-gray-100">
                    <p className={`text-sm text-gray-500 mb-4 transform transition-all duration-500 delay-[400ms] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        South Africa
                    </p>
                    <div className={`flex gap-4 transform transition-all duration-500 delay-[450ms] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <a href="#" className="text-[var(--brand-black)]"><div className="icon-instagram text-xl"></div></a>
                        <a href="#" className="text-[var(--brand-black)]"><div className="icon-facebook text-xl"></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}