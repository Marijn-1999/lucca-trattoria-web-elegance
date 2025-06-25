
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string[];
  allergens?: string[];
  preparationTime?: string;
  category: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-warm-800 text-center mb-8">
        {title}
      </h2>
      <div className="grid gap-6">
        {items.map((item) => (
          <Dialog key={item.name}>
            <DialogTrigger asChild>
              <Card className="bg-white border-warm-200 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]">
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
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-warm-800">
                  {item.name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-2xl font-bold text-warm-700">
                      {item.price}
                    </span>
                    {item.preparationTime && (
                      <span className="text-sm text-warm-600">
                        Prep time: {item.preparationTime}
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-warm-700 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-warm-800 mb-2">Ingredients:</h4>
                    <ul className="text-sm text-warm-600 space-y-1">
                      {item.ingredients.map((ingredient, idx) => (
                        <li key={idx}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  {item.allergens && item.allergens.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-warm-800 mb-2">Allergens:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
