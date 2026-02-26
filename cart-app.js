function CartApp() {
    // Mock cart items
    const [items, setItems] = React.useState([
        {
            id: 1,
            name: "The Charcoal Executive",
            size: "42R",
            price: 15000,
            image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop",
            quantity: 1
        },
        {
            id: 2,
            name: "Oxford White",
            size: "16 / 34",
            price: 2500,
            image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=800&auto=format&fit=crop",
            quantity: 2
        }
    ]);

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container-wide">
                    <h1 className="text-4xl font-serif font-bold mb-12 uppercase tracking-wide">Shopping Bag</h1>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Cart Items */}
                        <div className="flex-grow space-y-8">
                            {items.map(item => (
                                <div key={item.id} className="flex gap-6 border-b border-gray-200 pb-8">
                                    <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow flex justify-between">
                                        <div>
                                            <h3 className="font-serif font-bold text-lg mb-1">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mb-4">Size: {item.size}</p>
                                            <div className="flex items-center gap-4 text-sm">
                                                <button className="text-gray-400 hover:text-black font-bold text-lg">-</button>
                                                <span>{item.quantity}</span>
                                                <button className="text-gray-400 hover:text-black font-bold text-lg">+</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between items-end">
                                            <span className="font-bold">R {item.price * item.quantity}</span>
                                            <button className="text-xs uppercase font-bold text-gray-400 hover:text-red-600 tracking-wider">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-96 flex-shrink-0">
                            <div className="bg-gray-50 p-8">
                                <h3 className="text-lg font-bold uppercase tracking-widest mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-6 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">R {subtotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tax</span>
                                        <span className="font-medium">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-4 text-base font-bold">
                                        <span>Total</span>
                                        <span>R {subtotal}</span>
                                    </div>
                                </div>
                                <button className="btn-sharp w-full bg-[var(--brand-black)] text-white hover:bg-gray-900 mb-4">
                                    Checkout
                                </button>
                                <p className="text-center text-xs text-gray-500">Secure Checkout powered by Stripe</p>
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
root.render(<CartApp />);