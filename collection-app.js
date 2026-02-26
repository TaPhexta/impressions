function CollectionApp() {
    // Complete product list using all new assets
    const allProducts = [
        {
            id: 1,
            name: "The Executive Charcoal",
            category: "Suits",
            tags: ["Suits", "Double Breasted"],
            price: 15000,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/0bd24174-efdc-4825-b733-9d61b1a5aa12.jpeg", // suit1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/84b97efd-0d71-421a-b6af-5d38f70e5988.jpeg"
        },
        {
            id: 2,
            name: "Modern Navy Two-Piece",
            category: "Suits",
            tags: ["Suits"],
            price: 12000,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/84b97efd-0d71-421a-b6af-5d38f70e5988.jpeg", // suit2
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/fef03b95-5866-4499-b63a-14ceef7bfab0.jpeg"
        },
        {
            id: 3,
            name: "Classic Grey Wool",
            category: "Suits",
            tags: ["Suits"],
            price: 13500,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/fef03b95-5866-4499-b63a-14ceef7bfab0.jpeg", // suit3
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/0bd24174-efdc-4825-b733-9d61b1a5aa12.jpeg"
        },
        {
            id: 4,
            name: "Premium Cotton Shirt",
            category: "Shirts",
            tags: ["Shirts"],
            price: 2500,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/d2830e5f-18e3-4300-b554-1c3a2658d31f.jpeg", // shirt1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/d2830e5f-18e3-4300-b554-1c3a2658d31f.jpeg"
        },
        {
            id: 5,
            name: "Silk Pattern Tie",
            category: "Accessories",
            tags: ["Accessories", "Ties", "Silk"],
            price: 1200,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ea9cedec-1ac1-492b-b773-5f37c9030dbb.jpeg", // tie
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/8b9d5949-b7ac-464e-ae6e-2faad1155a9b.jpeg"
        },
        {
            id: 6,
            name: "Classic Navy Tie",
            category: "Accessories",
            tags: ["Accessories", "Ties"],
            price: 1200,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/8b9d5949-b7ac-464e-ae6e-2faad1155a9b.jpeg", // tie2
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ea9cedec-1ac1-492b-b773-5f37c9030dbb.jpeg"
        },
        {
            id: 7,
            name: "Leather Oxfords",
            category: "Shoes",
            tags: ["Shoes"],
            price: 6500,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/6b63e5a6-11d1-4140-9c8b-e2688facac26.jpeg", // shoes1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/00088560-ca82-4910-9aad-7072cf864a6c.jpeg"
        },
        {
            id: 8,
            name: "Brown Brogues",
            category: "Shoes",
            tags: ["Shoes"],
            price: 6500,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/00088560-ca82-4910-9aad-7072cf864a6c.jpeg", // shoes2
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/6b63e5a6-11d1-4140-9c8b-e2688facac26.jpeg"
        },
        {
            id: 9,
            name: "Merino Half-Zip",
            category: "Knitwear",
            tags: ["Shirts", "Knitwear"],
            price: 2800,
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ab4d9c0d-c04c-43ea-8870-a7e4ee29d70d.jpeg", // halfzipper1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ab4d9c0d-c04c-43ea-8870-a7e4ee29d70d.jpeg"
        }
    ];

    const [filter, setFilter] = React.useState('All');
    const [sortOption, setSortOption] = React.useState('featured');

    const tags = ['All', 'Double Breasted', 'Silk', 'Suits', 'Shirts', 'Ties', 'Shoes', 'Knitwear', 'Accessories'];

    // Filter Logic
    const filteredProducts = allProducts.filter(product => {
        if (filter === 'All') return true;
        return product.tags.includes(filter) || product.category === filter;
    });

    // Sort Logic
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'price-low-high') return a.price - b.price;
        if (sortOption === 'price-high-low') return b.price - a.price;
        if (sortOption === 'category') return a.category.localeCompare(b.category);
        return 0; // featured/default
    });

    // Format price
    const formatPrice = (price) => {
        return `R ${price.toLocaleString()}`;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 pb-24">
                {/* Hero for Collection */}
                <div className="relative h-[30vh] mb-12 overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                     <img 
                        src="https://app.trickle.so/storage/public/images/usr_17547ac760000001/af718bdb-02f9-4962-9ed5-06f129355b33.jpeg" 
                        alt="Collection Hero" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">The Collection</h1>
                        <p className="text-sm uppercase tracking-widest font-light">Spring / Summer 2026</p>
                    </div>
                </div>

                <div className="container-wide">
                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-100 pb-6 gap-6">
                        {/* Filters */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {tags.map((tag, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => setFilter(tag)}
                                    className={`uppercase tracking-widest text-[10px] md:text-xs font-bold px-3 py-1 transition-colors ${filter === tag ? 'bg-[var(--brand-black)] text-white' : 'text-gray-400 hover:text-black'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase font-bold text-gray-500">Sort By:</span>
                            <select 
                                className="text-sm border-none bg-transparent font-medium focus:ring-0 cursor-pointer"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="featured">Featured</option>
                                <option value="category">Category</option>
                                <option value="price-low-high">Price: Low to High</option>
                                <option value="price-high-low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {sortedProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={{...product, price: formatPrice(product.price)}} 
                            />
                        ))}
                    </div>

                    {sortedProducts.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <p>No products found for this category.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
            <StickyMobileNav />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CollectionApp />);