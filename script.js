const { useState } = React;

// 🔹 Navigation Bar Component
const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </nav>
    );
};

// 🔹 List Component (5 Items)
const List = () => {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    return (
        <div className="list-container">
            <h2>List of Items</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

// 🔹 Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Capstone Project | React 18 CDN</p>
        </footer>
    );
};

// 🔹 App Component (Contains all other components)
const App = () => {
    return (
        <div>
            <Navbar />
            <List />
            <Footer />
        </div>
    );
};

// Render the App Component in the Root Element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);