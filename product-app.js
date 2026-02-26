function ProductApp() {
    const [selectedSize, setSelectedSize] = React.useState(null);
    
    // Mock getting ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1';

    // Mock product data - normally fetched based on ID
    const product = {
        id: productId,
        name: "The Charcoal Executive",
        price: "15,000",
        description: "Crafted from super 150s merino wool, this suit features a modern tailored fit with a structured shoulder and high armhole. The charcoal tone is versatile enough for the boardroom and evening events.",
        fabric: "100% Super 150s Merino Wool",
        fit: "Tailored Slim Fit",
        images: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594938384824-022767a58e91?q=80&w=800&auto=format&fit=crop",
             "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop"
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container-wide">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Images Column */}
                        <div className="lg:w-3/5 space-y-4">
                            {/* Hero Image */}
                            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            {/* Secondary Images Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <img src={product.images[1]} alt="Detail" className="w-full h-full object-cover aspect-[3/4]" />
                                <img src={product.images[2]} alt="Detail" className="w-full h-full object-cover aspect-[3/4]" />
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit">
                            <div className="border-b border-black pb-6 mb-8">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] mb-4 uppercase leading-tight">
                                    {product.name}
                                </h1>
                                <p className="text-2xl font-light text-gray-800">R {product.price}</p>
                            </div>

                            <div className="space-y-8 mb-10">
                                <p className="text-gray-600 leading-relaxed font-light">
                                    {product.description}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="block font-bold uppercase tracking-wider mb-1">Fabric</span>
                                        <span className="text-gray-600">{product.fabric}</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold uppercase tracking-wider mb-1">Fit</span>
                                        <span className="text-gray-600">{product.fit}</span>
                                    </div>
                                </div>

                                <div>
                                    <span className="block font-bold uppercase tracking-wider mb-4">Select Size</span>
                                    <div className="flex flex-wrap gap-3">
                                        {[38, 40, 42, 44, 46, 48].map((size) => (
                                            <div 
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                                            >
                                                {size}R
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="btn-sharp w-full bg-[var(--brand-black)] text-white hover:bg-gray-900">
                                    Add to Cart
                                </button>
                                <a href="fitting.html" className="btn-sharp w-full block text-center">
                                    Schedule a Fitting
                                </a>
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
root.render(<ProductApp />);