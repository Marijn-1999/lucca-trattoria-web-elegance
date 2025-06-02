
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-800/80 to-sage-800/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Benvenuti alla Lucca Trattoria
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-warm-100 animate-fade-in">
            Authentic Italian cuisine crafted with passion and tradition
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-warm-600 hover:bg-warm-700 text-white">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-warm-800">
              <Link to="/contact">Make Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-800 mb-4">
              Why Choose Lucca Trattoria?
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              Experience the authentic flavors of Italy in every bite, prepared with the finest ingredients and time-honored recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-warm-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍝</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-800 mb-3">Fresh Pasta Daily</h3>
                <p className="text-warm-600">
                  Hand-made pasta prepared fresh every morning using traditional Italian techniques and the finest durum wheat.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-warm-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍷</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-800 mb-3">Curated Wine Selection</h3>
                <p className="text-warm-600">
                  Carefully selected Italian wines from renowned regions, perfectly paired with our authentic dishes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-warm-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-800 mb-3">Expert Italian Chefs</h3>
                <p className="text-warm-600">
                  Our chefs bring decades of experience from Italy, ensuring every dish meets the highest standards of authenticity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-warm-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready for an Authentic Italian Experience?
          </h2>
          <p className="text-xl text-warm-200 mb-8">
            Join us for an unforgettable dining experience where every meal tells a story of Italian tradition.
          </p>
          <Button asChild size="lg" className="bg-warm-600 hover:bg-warm-700">
            <Link to="/contact">Reserve Your Table</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
