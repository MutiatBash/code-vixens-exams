import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <h1> Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;
