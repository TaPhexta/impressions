function StickyMobileNav() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[var(--brand-black)] z-50 px-6 py-4 flex justify-between items-center shadow-lg" data-name="mobile-nav" data-file="components/StickyMobileNav.js">
            <a href="index.html" className="flex flex-col items-center gap-1 text-[var(--brand-black)]">
                <div className="icon-house text-xl"></div>
                <span className="text-[10px] uppercase tracking-wider font-bold">Home</span>
            </a>
            <a href="collection.html" className="flex flex-col items-center gap-1 text-[var(--brand-black)] opacity-60">
                <div className="icon-layout-grid text-xl"></div>
                <span className="text-[10px] uppercase tracking-wider font-bold">Browse</span>
            </a>
            <a href="payment-delivery.html" className="flex flex-col items-center gap-1 text-[var(--brand-black)] opacity-60">
                <div className="icon-truck text-xl"></div>
                <span className="text-[10px] uppercase tracking-wider font-bold">Delivery</span>
            </a>
            <a href="cart.html" className="flex flex-col items-center gap-1 text-[var(--brand-black)] opacity-60">
                <div className="icon-shopping-bag text-xl"></div>
                <span className="text-[10px] uppercase tracking-wider font-bold">Cart</span>
            </a>
        </div>
    );
}