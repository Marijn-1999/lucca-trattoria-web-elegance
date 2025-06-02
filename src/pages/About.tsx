
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-warm-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              La Nostra Storia
            </h1>
            <p className="text-xl text-warm-200">
              A tale of tradition, passion, and authentic Italian cuisine
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-3xl font-bold text-warm-800 mb-6">
                  From Tuscany to Your Table
                </h2>
                <div className="space-y-4 text-warm-700 leading-relaxed">
                  <p>
                    The story of Lucca Trattoria begins in the rolling hills of Tuscany, where our founder, 
                    Maria Benedetti, learned the art of Italian cooking from her grandmother in the small 
                    town of Lucca. Growing up in a family where food was the heart of every gathering, 
                    Maria absorbed not just recipes, but the soul of Italian cuisine.
                  </p>
                  <p>
                    In 1995, Maria and her husband Giuseppe decided to share their culinary heritage with 
                    a new community. They crossed the ocean with nothing but their family recipes, a dream, 
                    and an unwavering commitment to authenticity. What started as a small neighborhood 
                    restaurant has grown into a beloved institution.
                  </p>
                  <p>
                    Today, their son Marco continues the family tradition, ensuring that every dish 
                    served at Lucca Trattoria honors the recipes passed down through three generations. 
                    Our pasta is still made fresh daily, our sauces simmer slowly as they did in 
                    Nonna's kitchen, and our commitment to quality remains unchanged.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Italian countryside"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white border-warm-200 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🌱</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-warm-800 mb-3">
                    Fresh Ingredients
                  </h3>
                  <p className="text-warm-600">
                    We source the finest ingredients, many imported directly from Italy, to ensure 
                    authentic flavors in every dish.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-warm-200 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">👨‍👩‍👧‍👦</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-warm-800 mb-3">
                    Family Tradition
                  </h3>
                  <p className="text-warm-600">
                    Our recipes have been passed down through generations, preserving the authentic 
                    taste of traditional Italian cooking.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-warm-200 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-warm-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">❤️</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-warm-800 mb-3">
                    Hospitality
                  </h3>
                  <p className="text-warm-600">
                    We treat every guest like family, providing warm, genuine hospitality that makes 
                    every visit memorable.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quote Section */}
            <div className="bg-warm-800 text-white rounded-lg p-8 text-center">
              <blockquote className="font-serif text-2xl italic mb-4">
                "La cucina è il cuore della casa"
              </blockquote>
              <p className="text-warm-200 mb-2">
                "The kitchen is the heart of the home"
              </p>
              <p className="text-warm-300 text-sm">
                - Nonna Maria's favorite saying
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-warm-800 mb-8">
              Meet Our Family
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-warm-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-800 mb-2">
                  Marco Benedetti
                </h3>
                <p className="text-warm-600 mb-2">Head Chef & Owner</p>
                <p className="text-warm-700 text-sm">
                  Second-generation chef continuing the family tradition with passion and innovation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-warm-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍💼</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-warm-800 mb-2">
                  Sofia Benedetti
                </h3>
                <p className="text-warm-600 mb-2">Restaurant Manager</p>
                <p className="text-warm-700 text-sm">
                  Ensuring every guest feels welcomed and experiences the warmth of Italian hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
