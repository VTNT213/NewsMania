# React News App

### Description:
A news application built with React that provides users with the latest news across various categories such as general, business, entertainment, health, science, sports, and technology.

### Features:
- **Navigation:** A navigation bar (Navbar component) for easy access to different news categories.
- **News Display:** The News component displays news articles, and the content can be filtered by category.
- **Routing:** Utilizes react-router-dom for client-side routing, allowing users to navigate between different categories without refreshing the page.
  
### Technical Details:
- **Router Setup:**
Uses BrowserRouter for routing.
Defines routes using the Routes and Route components from react-router-dom.
Each route is linked to a specific news category and displays the News component with relevant props.

### Dependencies:
- **react:** Core library for building the user interface.
- **react-router-dom:** Handles routing within the app.
- **html-webpack-plugin:** Simplifies the creation of HTML files to serve the bundled JavaScript.
