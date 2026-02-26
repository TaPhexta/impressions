function FittingApp() {
    const [showForm, setShowForm] = React.useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Imagery */}
                        <div className="relative h-[600px] w-full bg-gray-100 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1595326129699-1065c1926619?q=80&w=2000&auto=format&fit=crop" 
                                alt="Tailoring Room" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h2 className="text-3xl font-serif font-bold">The Atelier</h2>
                                <p className="text-sm uppercase tracking-widest mt-2">Sandton, Johannesburg</p>
                            </div>
                        </div>

                        {/* Right Side: Logic */}
                        <div>
                            <h1 className="text-5xl font-serif font-bold mb-6">Bespoke Fitting</h1>
                            <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                                Experience the pinnacle of tailoring. Our master tailors will guide you through fabric selection, measurements, and the finer details of your custom garment.
                            </p>

                            {!showForm ? (
                                <div className="space-y-8 animate-fade-in">
                                    <div className="bg-gray-50 p-8 border border-gray-100">
                                        <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-sm">Location Details</h3>
                                        <p className="text-gray-600 mb-2">155 West Street, Sandton, Johannesburg, SA</p>
                                        <p className="text-gray-600 mb-6">Mon - Sat: 9am - 6pm</p>
                                        
                                        {/* Static Map Image */}
                                        <div className="w-full h-48 bg-gray-200 relative overflow-hidden mb-6">
                                            <img 
                                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop" 
                                                alt="Map Location" 
                                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                                            />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <div className="icon-map-pin text-3xl text-[var(--brand-black)] drop-shadow-md"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => setShowForm(true)} 
                                        className="btn-sharp w-full bg-[var(--brand-black)] text-white"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                                            <input type="text" className="input-sharp" placeholder="Enter first name" required />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                                            <input type="text" className="input-sharp" placeholder="Enter last name" required />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                                        <input type="email" className="input-sharp" placeholder="email@example.com" required />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone</label>
                                        <input type="tel" className="input-sharp" placeholder="+27 82 000 0000" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Preferred Date</label>
                                            <input type="date" className="input-sharp" required />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Preferred Time</label>
                                            <select className="input-sharp bg-transparent">
                                                <option>Morning (9am - 12pm)</option>
                                                <option>Afternoon (12pm - 4pm)</option>
                                                <option>Evening (4pm - 6pm)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" className="btn-sharp w-full bg-[var(--brand-black)] text-white">
                                            Confirm Booking
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => setShowForm(false)}
                                            className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500 w-full hover:text-black"
                                        >
                                            Cancel & Go Back
                                        </button>
                                    </div>
                                </form>
                            )}
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
root.render(<FittingApp />);