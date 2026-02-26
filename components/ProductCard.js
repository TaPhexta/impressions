function ProductCard({ product }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <a 
            href={`product.html?id=${product.id}`}
            className="group cursor-pointer flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-name="product-card"
            data-file="components/ProductCard.js"
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
                />
                {product.hoverImage && (
                    <img 
                        src={product.hoverImage} 
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
            </div>

            {/* Content */}
            <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-[var(--brand-black)]">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-600 font-sans">
                        {product.category}
                    </p>
                    <span className="text-sm font-semibold text-[var(--brand-black)]">
                        {/* Check if price is number or string already */}
                        {typeof product.price === 'number' ? `R ${product.price.toLocaleString()}` : product.price}
                    </span>
                </div>
            </div>
        </a>
    );
}