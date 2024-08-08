import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Banner from "./Components/Banner";

function App() {
  return (
    <Router>
      {/* <Header />
      <Banner
        imageUrl={`${process.env.PUBLIC_URL}/assets/Images/brand-pics/Coming.png`}
      /> */}
      {/* Define routes if you have other components/pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
