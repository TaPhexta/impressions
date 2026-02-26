function Footer() {
    const currentYear = new Date().getFullYear(); // Dynamic year
    
    return (
        <footer className="bg-[var(--brand-black)] text-white pt-20 pb-10 md:pb-20" data-name="footer" data-file="components/Footer.js">
            <div className="container-wide grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-serif font-bold mb-6">IMPRESSIONS</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Refining the South African gentleman through impeccable tailoring and timeless design.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Shop</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li><a href="collection.html" className="hover:text-white transition-colors">New Arrivals</a></li>
                        <li><a href="collection.html" className="hover:text-white transition-colors">Suits</a></li>
                        <li><a href="collection.html" className="hover:text-white transition-colors">Shirts</a></li>
                        <li><a href="collection.html" className="hover:text-white transition-colors">Shoes</a></li>
                        <li><a href="collection.html" className="hover:text-white transition-colors">Accessories</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Service</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li><a href="fitting.html" className="hover:text-white transition-colors">Book a Fitting</a></li>
                        <li><a href="payment-delivery.html" className="hover:text-white transition-colors">Payment & Delivery</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Contact</h4>
                    <div className="space-y-4 text-sm text-gray-300">
                        <p className="leading-relaxed">
                            155 West Street,<br/>
                            Sandton, Johannesburg,<br/>
                            2196, South Africa
                        </p>
                        <p>+27 11 123 4567</p>
                        <p>concierge@impressions.co.za</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Stay Connected</h4>
                    <form className="flex border-b border-gray-700 pb-2 mb-6">
                        <input 
                            type="email" 
                            placeholder="EMAIL ADDRESS" 
                            className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-gray-500 uppercase tracking-wider"
                        />
                        <button className="text-gray-400 hover:text-white uppercase text-xs font-bold">Join</button>
                    </form>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><div className="icon-instagram text-xl"></div></a>
                        <a href="#" className="text-gray-400 hover:text-white"><div className="icon-twitter text-xl"></div></a>
                        <a href="#" className="text-gray-400 hover:text-white"><div className="icon-facebook text-xl"></div></a>
                    </div>
                </div>
            </div>

            <div className="container-wide border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
                <p>&copy; {currentYear} Impressions Smart Wear.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a href="https://wa.me/27111234567" target="_blank" className="fixed bottom-20 md:bottom-8 right-6 md:right-8 bg-green-600 hover:bg-green-700 text-white w-12 h-12 flex items-center justify-center shadow-lg transition-all z-40 rounded-full md:rounded-none">
                <div className="icon-message-circle text-2xl"></div>
            </a>
        </footer>
    );
}