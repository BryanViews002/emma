import {Outlet} from  "react-router-dom"



 import Nav from "./Nav.jsx";

 import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <main className="App">
      <Nav />
      <Outlet />
      <Footer />
      
    </main>
  );
}

export default Home