
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
  const menuSections = [
    {
      title: "Antipasti",
      items: [
        {
          name: "Antipasto della Casa",
          description: "Selection of cured meats, artisanal cheeses, olives, and roasted vegetables",
          price: "$18"
        },
        {
          name: "Bruschetta al Pomodoro",
          description: "Toasted bread topped with fresh tomatoes, basil, and extra virgin olive oil",
          price: "$12"
        },
        {
          name: "Arancini Siciliani",
          description: "Crispy risotto balls stuffed with mozzarella and peas, served with marinara sauce",
          price: "$14"
        },
        {
          name: "Carpaccio di Manzo",
          description: "Thinly sliced raw beef with arugula, capers, and Parmigiano-Reggiano",
          price: "$16"
        }
      ]
    },
    {
      title: "Primi Piatti",
      items: [
        {
          name: "Spaghetti Carbonara",
          description: "Traditional Roman pasta with eggs, pecorino cheese, pancetta, and black pepper",
          price: "$22"
        },
        {
          name: "Penne all'Arrabbiata",
          description: "Penne pasta in spicy tomato sauce with garlic, red chilies, and fresh herbs",
          price: "$19"
        },
        {
          name: "Risotto ai Porcini",
          description: "Creamy Arborio rice with porcini mushrooms and Parmigiano-Reggiano",
          price: "$24"
        },
        {
          name: "Lasagna della Nonna",
          description: "Traditional layered pasta with meat sauce, béchamel, and three cheeses",
          price: "$26"
        },
        {
          name: "Gnocchi al Gorgonzola",
          description: "Handmade potato gnocchi in creamy gorgonzola sauce with walnuts",
          price: "$21"
        }
      ]
    },
    {
      title: "Secondi Piatti",
      items: [
        {
          name: "Osso Buco alla Milanese",
          description: "Braised veal shanks with vegetables, white wine, and aromatic herbs",
          price: "$34"
        },
        {
          name: "Pollo alla Parmigiana",
          description: "Breaded chicken breast with tomato sauce and mozzarella cheese",
          price: "$28"
        },
        {
          name: "Branzino in Crosta di Sale",
          description: "Mediterranean sea bass baked in sea salt crust with herbs",
          price: "$32"
        },
        {
          name: "Bistecca alla Fiorentina",
          description: "Grilled T-bone steak with rosemary, olive oil, and lemon (for two)",
          price: "$65"
        }
      ]
    },
    {
      title: "Dolci",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
          price: "$12"
        },
        {
          name: "Panna Cotta ai Frutti di Bosco",
          description: "Silky vanilla custard topped with mixed berry compote",
          price: "$10"
        },
        {
          name: "Cannoli Siciliani",
          description: "Crispy pastry shells filled with sweet ricotta and chocolate chips",
          price: "$11"
        },
        {
          name: "Gelato Artigianale",
          description: "House-made gelato - ask for today's flavors",
          price: "$8"
        }
      ]
    },
    {
      title: "Bevande",
      items: [
        {
          name: "Espresso",
          description: "Traditional Italian espresso",
          price: "$4"
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk and foam",
          price: "$5"
        },
        {
          name: "Limoncello",
          description: "Traditional Italian lemon liqueur",
          price: "$8"
        },
        {
          name: "Chianti Classico",
          description: "Glass of our house red wine",
          price: "$12"
        },
        {
          name: "Prosecco di Valdobbiadene",
          description: "Glass of premium Italian sparkling wine",
          price: "$10"
        },
        {
          name: "San Pellegrino",
          description: "Sparkling mineral water",
          price: "$4"
        }
      ]
    }
  ];

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
                <h2 className="font-serif text-3xl font-bold text-warm-800 text-center mb-8">
                  {section.title}
                </h2>
                <div className="grid gap-6">
                  {section.items.map((item) => (
                    <Card key={item.name} className="bg-white border-warm-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-serif text-xl font-semibold text-warm-800 mb-2">
                              {item.name}
                            </h3>
                            <p className="text-warm-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="ml-6">
                            <span className="font-semibold text-warm-700 text-lg">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
