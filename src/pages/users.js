import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import Navbar from "../components/navbar";
import useAxios from "../components/useAxios";
import {
  Input,
  Button,
  Form,
  Card,
  P,
  Container,
  Head,
} from "../components/styles";

// USERS PAGE
const WeatherContext = createContext();
export function UsersPage() {
  const [searchUsers, setSearchUsers] = useState("");
  //   const [weatherData, setSearchUsers] = useState("");

  const { data, loading, error } = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );

  function handleData(event) {
    event.preventDefault();
    if (data) {
      setSearchUsers(searchUsers);
      console.log("searching");
    } else if (error) {
      console.log("cannot get data");
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        searchUsers,
        setSearchUsers,
        handleData,
      }}
    >
      <Container>
        <Navbar />
        <SearchBar />
        <DisplayUsers />
      </Container>
    </WeatherContext.Provider>
  );
}

// SEARCH BAR
function SearchBar() {
  const { searchUsers, setSearchUsers, handleData } =
    useContext(WeatherContext);

  useEffect(() => {
    setSearchUsers(searchUsers);
    console.log("searching");
  }, [searchUsers, setSearchUsers]);

  const handleInput = (event) => {
    setSearchUsers(event.target.value);
    console.log("searching for users");
  };

  return (
    <Form onSubmit={handleData}>
      <div>
        <Input
          type="text"
          name="searchUsers"
          placeholder="Search for a User"
          value={searchUsers}
          onChange={handleInput}
        />
      </div>
    </Form>
  );
}

//USER DISPLAY CARD
function DisplayUsers() {
  const { searchUsers, setSearchUsers } = useContext(WeatherContext);
  const { data, loading, error } = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (loading) {
    return <p> Loading data....</p>;
    //   } else if (searchUsers) {
    //     setSearchUsers(data);
    //     console.log("searching");
  } else if (error) {
    return <P>Error loading data : {error.message}</P>;
  }
  return (
    <div>
      <Head> Users</Head>
      <Card>
        {data.map((user) => (
          <P key={user.id}> {user.name}</P>
        ))}
      </Card>
    </div>
  );
}
