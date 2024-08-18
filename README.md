# E-Commerce Product Listing Application
    This project is a simple E-Commerce Product Listing Application built with React. The application features a product grid, filter sidebar, and a dynamic search bar that provides real-time product suggestions. The application fetches product data from an external API and displays it in a user-friendly interface, allowing users to search for products, view product details, and add products to their cart.

# Features
- Dynamic Product Search: The search bar in the header provides real-time suggestions based on the user's input, making it easier to find products quickly.
- Product Grid: Displays a grid of products fetched from an external API. Each product is shown with its image, title, price, rating, and a description.
- Filter Sidebar: Users can filter products by categories and other criteria. The filters dynamically update the product grid.
- Responsive Design: The application is designed to be responsive, ensuring a smooth user experience across different screen sizes.

# Components
- Header: Displays the navigation bar and the search bar. It handles user input for searching and displays suggestions based on the products.

- FilterSidebar: Provides filtering options to refine the product search. Filters include categories and customizable options.

- ProductGrid: Displays a grid of ProductCard components, each representing a product fetched from the API.

- ProductCard: Shows individual product details, including an image, title, price, rating, and description. It also includes an "Add to Cart" button.

- Footer: The Footer component is a responsive, visually appealing footer designed for a modern eCommerce website. It includes sections for a newsletter signup, quick links, contact information, social media icons, and accepted payment methods. The component is styled to fit seamlessly into any dark-themed website with a clean and consistent design.


# Pages
- HomePage: The main page of the application, which includes the Header, FilterSidebar, and ProductGrid. It manages the state for the products, filters, and search queries.


# API
- The application fetches product data from the Fake Store API. The API returns a list of products, each with details such as title, price, image, and rating.

# Customization
You can customize the application by modifying the following:

- Styling: Update the CSS files in the src/styles/ directory to change the look and feel of the application.
- Product Data: Replace the API endpoint in HomePage.js to fetch products from a different API or your own backend.