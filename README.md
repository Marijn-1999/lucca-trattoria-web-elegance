# Lucca Trattoria – Italian Restaurant Website

Lucca Trattoria is a fully responsive, modern website for a fictional Italian restaurant. The project was created to experiment with Lovable AI, an AI-powered programming assistant. Through iterative prompts, the website was developed with a focus on clean design, elegant typography, warm colors, and an interactive user experience.

---

## **Features**

- Fully responsive layout optimized for desktop and mobile
- Hero section with welcome message and large food imagery
- Complete menu with clickable dishes that open detail modals
- "About Us" page with restaurant story and philosophy
- Contact page with business hours, location, and reservation form
- Clean code structure using components and data separation

---

## Used Technologies

### Application Technologies

- Next.js (React framework)  
- Tailwind CSS (utility-first CSS)  
- TypeScript  
- Lovable AI (code generation via prompts)

### Development Tools

- VSCode  
- Git & GitHub  
- Node.js & npm  

---

## **Installation**

### Requirements:

- Node.js version 16 or newer
- npm package manager

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lucca-trattoria.git
Navigate to the project directory:

bash
Copy
Edit
cd lucca-trattoria
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Open your browser and go to http://localhost:3000 to view the website.

### Usage
The website contains the following main pages:

Home: Intro section with background image and welcome text.

Menu: Dishes categorized under Appetizers, Mains, Desserts, and Drinks. Click any item to see detailed info including an image, ingredients, preparation time, and allergens.

About: Short story of the fictional restaurant.

Contact: Reservation form with fields for name, email, date, and time. Includes location and opening hours.

Project Structure Overview
Components separated by concern for maintainability.

Data files (e.g., menuData.ts) hold menu items and details.

Tailwind CSS classes provide styling with utility-first approach.

Responsive design optimized for desktop and mobile devices.

### Contributing
If you want to contribute:

Fork the repository.

Create a feature branch:

bash
Copy
Edit
git checkout -b feature/your-feature-name
Make your changes.

Commit your changes with descriptive messages:

bash
Copy
Edit
git commit -m "Add your message here"
Push the branch:

bash
Copy
Edit
git push origin feature/your-feature-name
Open a pull request for review.

Please follow consistent code style and write clear commit messages.

### Troubleshooting / FAQ
Q: The reservation form does not send data.
A: The form is frontend-only. Connect it to a backend such as Supabase or a serverless function to handle submissions.

Q: Can I replace the placeholder food images?
A: Yes. Replace image URLs or files in the public folder or update menuData.ts.

Q: How do I add new dishes to the menu?
A: Add new items in menuData.ts following the existing object structure.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Changelog
Version 1.0.0
Initial release created with Lovable AI

Fully responsive layout with four main pages

Clickable menu items with modal details

First iteration of design and functionality complete

