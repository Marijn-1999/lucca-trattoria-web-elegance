
export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string[];
  allergens?: string[];
  preparationTime?: string;
  category: string;
}

export const menuSections = [
  {
    title: "Antipasti",
    items: [
      {
        name: "Antipasto della Casa",
        description: "Selection of cured meats, artisanal cheeses, olives, and roasted vegetables",
        price: "$18",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
        ingredients: ["Prosciutto di Parma", "Parmigiano-Reggiano", "Mozzarella di Bufala", "Olive Taggiasche", "Roasted peppers", "Artichoke hearts"],
        allergens: ["Dairy", "Gluten"],
        preparationTime: "10 minutes",
        category: "antipasti"
      },
      {
        name: "Bruschetta al Pomodoro",
        description: "Toasted bread topped with fresh tomatoes, basil, and extra virgin olive oil",
        price: "$12",
        image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop",
        ingredients: ["Rustic bread", "San Marzano tomatoes", "Fresh basil", "Garlic", "Extra virgin olive oil", "Sea salt"],
        allergens: ["Gluten"],
        preparationTime: "8 minutes",
        category: "antipasti"
      },
      {
        name: "Arancini Siciliani",
        description: "Crispy risotto balls stuffed with mozzarella and peas, served with marinara sauce",
        price: "$14",
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=400&h=300&fit=crop",
        ingredients: ["Arborio rice", "Mozzarella", "Green peas", "Tomato sauce", "Breadcrumbs", "Eggs"],
        allergens: ["Dairy", "Eggs", "Gluten"],
        preparationTime: "25 minutes",
        category: "antipasti"
      },
      {
        name: "Carpaccio di Manzo",
        description: "Thinly sliced raw beef with arugula, capers, and Parmigiano-Reggiano",
        price: "$16",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        ingredients: ["Premium beef tenderloin", "Fresh arugula", "Capers", "Parmigiano-Reggiano", "Lemon", "Extra virgin olive oil"],
        allergens: ["Dairy"],
        preparationTime: "15 minutes",
        category: "antipasti"
      }
    ]
  },
  {
    title: "Primi Piatti",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Traditional Roman pasta with eggs, pecorino cheese, pancetta, and black pepper",
        price: "$22",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        ingredients: ["Spaghetti", "Guanciale", "Eggs", "Pecorino Romano", "Black pepper", "Sea salt"],
        allergens: ["Eggs", "Dairy", "Gluten"],
        preparationTime: "20 minutes",
        category: "primi"
      },
      {
        name: "Penne all'Arrabbiata",
        description: "Penne pasta in spicy tomato sauce with garlic, red chilies, and fresh herbs",
        price: "$19",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
        ingredients: ["Penne pasta", "San Marzano tomatoes", "Garlic", "Red chilies", "Fresh parsley", "Extra virgin olive oil"],
        allergens: ["Gluten"],
        preparationTime: "18 minutes",
        category: "primi"
      },
      {
        name: "Risotto ai Porcini",
        description: "Creamy Arborio rice with porcini mushrooms and Parmigiano-Reggiano",
        price: "$24",
        image: "https://images.unsplash.com/photo-1611599537845-1c7aca808cfa?w=400&h=300&fit=crop",
        ingredients: ["Arborio rice", "Porcini mushrooms", "Vegetable broth", "White wine", "Parmigiano-Reggiano", "Butter", "Onion"],
        allergens: ["Dairy"],
        preparationTime: "35 minutes",
        category: "primi"
      },
      {
        name: "Lasagna della Nonna",
        description: "Traditional layered pasta with meat sauce, béchamel, and three cheeses",
        price: "$26",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
        ingredients: ["Fresh pasta sheets", "Ground beef", "Tomato sauce", "Béchamel sauce", "Mozzarella", "Parmigiano-Reggiano", "Ricotta"],
        allergens: ["Dairy", "Eggs", "Gluten"],
        preparationTime: "45 minutes",
        category: "primi"
      },
      {
        name: "Gnocchi al Gorgonzola",
        description: "Handmade potato gnocchi in creamy gorgonzola sauce with walnuts",
        price: "$21",
        image: "https://images.unsplash.com/photo-1589227168990-c4eb3961d41d?w=400&h=300&fit=crop",
        ingredients: ["Potato gnocchi", "Gorgonzola cheese", "Heavy cream", "Walnuts", "Fresh sage", "Black pepper"],
        allergens: ["Dairy", "Eggs", "Gluten", "Nuts"],
        preparationTime: "25 minutes",
        category: "primi"
      }
    ]
  },
  {
    title: "Secondi Piatti",
    items: [
      {
        name: "Osso Buco alla Milanese",
        description: "Braised veal shanks with vegetables, white wine, and aromatic herbs",
        price: "$34",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        ingredients: ["Veal shanks", "Carrots", "Celery", "Onions", "White wine", "Beef stock", "Gremolata", "Saffron risotto"],
        allergens: ["Dairy"],
        preparationTime: "2.5 hours",
        category: "secondi"
      },
      {
        name: "Pollo alla Parmigiana",
        description: "Breaded chicken breast with tomato sauce and mozzarella cheese",
        price: "$28",
        image: "https://images.unsplash.com/photo-1598515213692-d872ba645ffb?w=400&h=300&fit=crop",
        ingredients: ["Chicken breast", "Breadcrumbs", "Eggs", "Mozzarella", "Tomato sauce", "Parmigiano-Reggiano", "Fresh basil"],
        allergens: ["Dairy", "Eggs", "Gluten"],
        preparationTime: "35 minutes",
        category: "secondi"
      },
      {
        name: "Branzino in Crosta di Sale",
        description: "Mediterranean sea bass baked in sea salt crust with herbs",
        price: "$32",
        image: "https://images.unsplash.com/photo-1559847844-d613a5c114e0?w=400&h=300&fit=crop",
        ingredients: ["Whole sea bass", "Coarse sea salt", "Fresh herbs", "Lemon", "Extra virgin olive oil", "Roasted vegetables"],
        allergens: ["Fish"],
        preparationTime: "40 minutes",
        category: "secondi"
      },
      {
        name: "Bistecca alla Fiorentina",
        description: "Grilled T-bone steak with rosemary, olive oil, and lemon (for two)",
        price: "$65",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        ingredients: ["Premium T-bone steak", "Fresh rosemary", "Extra virgin olive oil", "Lemon", "Coarse sea salt", "Black pepper"],
        preparationTime: "20 minutes",
        category: "secondi"
      }
    ]
  },
  {
    title: "Dolci",
    items: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
        price: "$12",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        ingredients: ["Ladyfinger biscuits", "Espresso", "Mascarpone", "Eggs", "Sugar", "Cocoa powder", "Dark rum"],
        allergens: ["Dairy", "Eggs", "Gluten", "Alcohol"],
        preparationTime: "30 minutes + chilling",
        category: "dolci"
      },
      {
        name: "Panna Cotta ai Frutti di Bosco",
        description: "Silky vanilla custard topped with mixed berry compote",
        price: "$10",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
        ingredients: ["Heavy cream", "Sugar", "Gelatin", "Vanilla bean", "Mixed berries", "Berry coulis"],
        allergens: ["Dairy"],
        preparationTime: "20 minutes + setting",
        category: "dolci"
      },
      {
        name: "Cannoli Siciliani",
        description: "Crispy pastry shells filled with sweet ricotta and chocolate chips",
        price: "$11",
        image: "https://images.unsplash.com/photo-1605207805096-f11ad6c8e41f?w=400&h=300&fit=crop",
        ingredients: ["Pastry shells", "Ricotta cheese", "Powdered sugar", "Chocolate chips", "Candied orange peel", "Pistachios"],
        allergens: ["Dairy", "Eggs", "Gluten", "Nuts"],
        preparationTime: "25 minutes",
        category: "dolci"
      },
      {
        name: "Gelato Artigianale",
        description: "House-made gelato - ask for today's flavors",
        price: "$8",
        image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop",
        ingredients: ["Whole milk", "Heavy cream", "Sugar", "Natural flavors", "Seasonal ingredients"],
        allergens: ["Dairy"],
        preparationTime: "Fresh daily",
        category: "dolci"
      }
    ]
  },
  {
    title: "Bevande",
    items: [
      {
        name: "Espresso",
        description: "Traditional Italian espresso",
        price: "$4",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e33?w=400&h=300&fit=crop",
        ingredients: ["Premium Italian coffee beans"],
        preparationTime: "2 minutes",
        category: "bevande"
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: "$5",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop",
        ingredients: ["Espresso", "Steamed milk", "Milk foam"],
        allergens: ["Dairy"],
        preparationTime: "3 minutes",
        category: "bevande"
      },
      {
        name: "Limoncello",
        description: "Traditional Italian lemon liqueur",
        price: "$8",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        ingredients: ["Lemon zest", "Pure alcohol", "Sugar", "Water"],
        allergens: ["Alcohol"],
        preparationTime: "Served chilled",
        category: "bevande"
      },
      {
        name: "Chianti Classico",
        description: "Glass of our house red wine",
        price: "$12",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop",
        ingredients: ["Sangiovese grapes", "Tuscany terroir"],
        allergens: ["Alcohol", "Sulfites"],
        category: "bevande"
      },
      {
        name: "Prosecco di Valdobbiadene",
        description: "Glass of premium Italian sparkling wine",
        price: "$10",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        ingredients: ["Glera grapes", "Traditional method"],
        allergens: ["Alcohol", "Sulfites"],
        category: "bevande"
      },
      {
        name: "San Pellegrino",
        description: "Sparkling mineral water",
        price: "$4",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
        ingredients: ["Natural mineral water", "Natural carbonation"],
        category: "bevande"
      }
    ]
  }
];
