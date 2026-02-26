// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-sharp bg-black text-white"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="flex flex-col min-h-screen" data-name="app" data-file="app.js">
        <Header />
        <main className="flex-grow">
            <Hero />
            
            {/* Introductory Text Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight text-[var(--brand-black)]">
                            "STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK."
                        </h2>
                        <div className="w-16 h-0.5 bg-[var(--brand-black)] mx-auto mb-8"></div>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                            We believe in the power of the perfect fit. Our collection is curated for the modern South African gentleman who values precision, quality, and timeless elegance.
                        </p>
                    </div>
                </div>
            </section>

            <ProductGrid />
            
            {/* Visual Break / Banner */}
            <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_17547ac760000001/bcff0f2a-4160-40eb-a725-83f4cd2d4c37.jpeg" 
                    alt="Tailoring detail" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center">
                    <div className="text-white">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Made to Measure</h2>
                        <p className="text-lg mb-8 tracking-wide uppercase font-light">Experience the perfect fit in Sandton</p>
                        <a href="fitting.html" className="btn-sharp bg-white text-black hover:bg-black hover:text-white border-white inline-block">
                            Book Appointment
                        </a>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        <StickyMobileNav />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);