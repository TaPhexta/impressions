function ProductGrid() {
    // Selected highlights for homepage
    const products = [
        {
            id: 1,
            name: "The Executive Charcoal",
            category: "Suits",
            price: "15,000",
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/0bd24174-efdc-4825-b733-9d61b1a5aa12.jpeg", // suit1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/84b97efd-0d71-421a-b6af-5d38f70e5988.jpeg" // suit2 as hover
        },
        {
            id: 4,
            name: "Premium Cotton Shirt",
            category: "Shirts",
            price: "2,500",
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/d2830e5f-18e3-4300-b554-1c3a2658d31f.jpeg", // shirt1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/d2830e5f-18e3-4300-b554-1c3a2658d31f.jpeg"
        },
        {
            id: 7,
            name: "Leather Oxfords",
            category: "Shoes",
            price: "6,500",
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/6b63e5a6-11d1-4140-9c8b-e2688facac26.jpeg", // shoes1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/00088560-ca82-4910-9aad-7072cf864a6c.jpeg" // shoes2
        },
        {
            id: 2,
            name: "Modern Navy Two-Piece",
            category: "Suits",
            price: "12,000",
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/84b97efd-0d71-421a-b6af-5d38f70e5988.jpeg", // suit2
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/fef03b95-5866-4499-b63a-14ceef7bfab0.jpeg"
        },
        {
            id: 9,
            name: "Merino Half-Zip",
            category: "Knitwear",
            price: "2,800",
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ab4d9c0d-c04c-43ea-8870-a7e4ee29d70d.jpeg", // halfzipper1
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ab4d9c0d-c04c-43ea-8870-a7e4ee29d70d.jpeg"
        },
        {
            id: 5,
            name: "Silk Pattern Tie",
            category: "Accessories",
            price: "1,200",
            image: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/ea9cedec-1ac1-492b-b773-5f37c9030dbb.jpeg", // tie
            hoverImage: "https://app.trickle.so/storage/public/images/usr_17547ac760000001/8b9d5949-b7ac-464e-ae6e-2faad1155a9b.jpeg"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-white" data-name="product-grid" data-file="components/ProductGrid.js">
            <div className="container-wide">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-serif font-bold text-[var(--brand-black)]">Latest Arrivals</h2>
                    <a href="collection.html" className="hidden md:block text-sm uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                
                <div className="mt-16 text-center md:hidden">
                    <a href="collection.html" className="btn-sharp">View All</a>
                </div>
            </div>
        </section>
    );
}