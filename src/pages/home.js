import Navbar from "../components/navbar";
import { Container } from "../components/styles";

function Home() {
  return (
    <Container>
      <div className="App">
        <Navbar />
        <h1> Welcome to the Home Page</h1>
      </div>
    </Container>
  );
}

export default Home;
