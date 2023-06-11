import { useState, useEffect, createContext, useContext } from "react";
import Navbar from "../components/navbar";
import useAxios from "../components/useAxios";
import {
  Input,
  Form,
  Card,
  List
  Userlist,
  Usercard,
  P,
  Container,
  Head,
} from "../components/styles";

// USERS PAGE
const UsersContext = createContext();
export function UsersPage() {
  const [searchUsers, setSearchUsers] = useState("");

  const { data, loading, error } = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );

  function handleData(event) {
    event.preventDefault();
    if (data) {
      setSearchUsers(searchUsers);
      //   console.log("searching");
    } else if (error) {
      console.log("cannot get data");
    }
  }

  return (
    <UsersContext.Provider
      value={{
        searchUsers,
        setSearchUsers,
        handleData,
      }}
    >
      <Container>
        <Navbar />
        <h1> View Our Users</h1>
        <SearchBar />
        <DisplayUsers />
      </Container>
    </UsersContext.Provider>
  );
}

// SEARCH BAR
function SearchBar() {
  const { searchUsers, setSearchUsers, handleData } = useContext(UsersContext);

  useEffect(() => {
    setSearchUsers(searchUsers);
    console.log("managing fetching effects");
  }, [searchUsers, setSearchUsers]);

  const handleInput = (event) => {
    setSearchUsers(event.target.value);
    console.log("searching for users");
  };

  return (
    <div>
      <Input
        type="text"
        name="searchUsers"
        placeholder="Search for a User"
        value={searchUsers}
        onChange={handleInput}
      />
    </div>
  );
}

//USER DISPLAY CARD
function DisplayUsers() {
  const { searchUsers, setSearchUsers } = useContext(UsersContext);
  const { data, loading, error } = useAxios(
    "https://jsonplaceholder.typicode.com/users"
  );
  //   if (loading) {
  //     return <p> Loading Users....</p>;
  //     //   } else if (searchUsers) {
  //     //     setSearchUsers(data);
  //     //     console.log("searching");
  //   } else if (error) {
  //     return <p>Error loading data : {error.message}</p>;
  //   }
  return (
    <div>
      <Head>Users</Head>
      {loading ? (
        <p> Loading Users....</p>
      ) : error ? (
        <p>Error loading users : {error}</p>
      ) : (
        <Usercard>
          {data
            .filter((user) => {
              return searchUsers.toLowerCase() === ""
                ? user
                : user.name.toLowerCase().includes(searchUsers);
            })
            .map((user) => (
              <Userlist>
                <List key={user.id}> {user.name}</List>
              </Userlist>
            ))}
        </Usercard>
      )}
    </div>
  );
}
