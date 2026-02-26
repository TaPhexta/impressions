function PaymentDeliveryApp() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">Payment & Delivery</h1>
                        <p className="text-center text-gray-600 mb-16 text-lg font-light">
                            Exclusive service for our distinguished clients. Follow the steps below to secure your order.
                        </p>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="flex gap-6 md:gap-10 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center text-xl font-serif font-bold">1</div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Select Your Items</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Browse our collection and find the pieces that define your style. Take a screenshot of the desired items in the website or your cart.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 md:gap-10 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center text-xl font-serif font-bold">2</div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Note Your Details</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Make a note of the specific size combinations and any customization preferences you require.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 md:gap-10 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center text-xl font-serif font-bold">3</div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Contact Concierge</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Contact us directly on WhatsApp to proceed with your order and payment arrangements.
                                    </p>
                                    <a href="https://wa.me/27111234567" target="_blank" className="btn-sharp inline-flex items-center gap-2 hover:bg-green-700 hover:border-green-700 hover:text-white">
                                        <div className="icon-message-circle text-lg"></div>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-6 md:gap-10 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center text-xl font-serif font-bold">4</div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Confirm Payment</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Send your proof of payment and delivery details via WhatsApp to our team.
                                    </p>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex gap-6 md:gap-10 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-black flex items-center justify-center text-xl font-serif font-bold">5</div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Delivery</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Sit back and relax. You will receive and enjoy your quality smart wear within 7 workdays, delivered anywhere in South Africa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <StickyMobileNav />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PaymentDeliveryApp />);