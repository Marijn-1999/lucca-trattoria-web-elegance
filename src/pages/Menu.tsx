
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import { menuSections } from "@/data/menuData";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-warm-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              La Nostra Menu
            </h1>
            <p className="text-xl text-warm-200">
              Authentic Italian dishes crafted with passion and the finest ingredients
            </p>
          </div>
        </section>

        {/* Menu Sections */}
        <section className="py-16 bg-warm-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {menuSections.map((section, index) => (
              <div key={section.title} className={index > 0 ? "mt-16" : ""}>
                <MenuSection title={section.title} items={section.items} />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-sage-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold mb-4">
              Wine Pairing Available
            </h2>
            <p className="text-sage-200">
              Ask your server about our carefully selected Italian wines to complement your meal
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
