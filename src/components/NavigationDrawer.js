import { Nav, Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"; // Importing Home Component
import Products from "./Products"; // Importing Products Component"

const NavigationDrawer = () => {
  const arr = [
    {
      name: "Nike Men's Air Zoom Pegasus 38 Running Shoe",
      category: "Footwear",
      rating: 4.4,
      price: 9695,
      image: "https://m.media-amazon.com/images/I/61WZDJNfOJL._UL1250_.jpg",
      id: "1",
    },
    {
      name: "Puma Men's Softride Rift Tech One8 Closed Shoe",
      category: "Footwear",
      rating: 3.8,
      price: 3299,
      image: "https://m.media-amazon.com/images/I/61XQS-Oz+FL._UL1200_.jpg",
      id: "2",
    },
    {
      name: "Puma Unisex Adult Blaze Peacoat White Running Shoe-7 Kids UK (19511001)",
      category: "Footwear",
      rating: 4.3,
      price: 1599,
      image: "https://m.media-amazon.com/images/I/61yPkBikX4L._UL1200_.jpg",
      id: "3",
    },
    {
      name: "Adidas Men's Response Super 2.0 Shoes",
      category: "Footwear",
      rating: 5,
      price: 5230,
      image: "https://m.media-amazon.com/images/I/61zkH0+ANvL._UL1500_.jpg",
      id: "4",
    },
    {
      name: "Woodland Men's G 40777cma Leather Sneaker",
      category: "Footwear",
      rating: 4.2,
      price: 3695,
      image: "https://m.media-amazon.com/images/I/61deZ+oW3yL._UL1258_.jpg",
      id: "5",
    },
    {
      name: "AMD Ryzen 7 3700X Desktop Processor 8 Cores up to 4.4GHz 36MB Cache AM4 Socket (100-100000071BOX)",
      category: "Computer Peripherals",
      rating: 4.5,
      price: 26500,
      image: "https://m.media-amazon.com/images/I/717Di3DGIbL._AC_UY218_.jpg",
      id: "6",
    },
  ];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand>My Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="workspace">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products arr={arr} />}></Route>
        </Routes>
      </Container>
    </>
  );
};
export default NavigationDrawer;
