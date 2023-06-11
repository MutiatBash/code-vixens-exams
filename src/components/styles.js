import styled from "styled-components";

export const Container = styled.body`
  //   position: relative;
  min-height: 100vh;
`;
// export const Background = styled.main`
//   background-size: cover;
//   background-position: top;
//   background-repeat: no-repeat;
//   width: 100%;
//   min-height: 100vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   // background-color: blue;
//   z-index: -1;
//   filter: brightness(0.6) saturate(0.68);
// `;
export const Form = styled.form`
  max-width: 500px;
  display: flex;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 18px rgb(300, 280, 240);
  margin: 2rem auto;
  //   background-color: white;
  padding: 0.2rem 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  //   gap: 1.2rem;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  border-radius: 20px;
  border: 1px solid grey;
  //   background-color: lightcream;
  padding: 1rem 7rem 1rem 1rem;
`;
export const Button = styled.button`
  background-color: #1599ae;
  border: none;
  display: flex;
  margin: 1rem auto;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  padding: 1rem 4rem;
  color: white;
`;
export const Head = styled.h1`
  font-size: 1.8rem;
  padding-top: 1rem;
  text-align: center;
  //   color: white;
`;
export const P = styled.p`
  font-size: 1.2rem;
  padding-top: 1rem;
  font-weight: 500;
  color: white;
`;
export const Card = styled.div`
  max-width: 500px;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 2px 18px rgb(280, 250, 280);
  margin: 2rem auto;
  padding: 1rem 1.5rem;
  background-color: rgba(5, 14, 25, 0.75);
`;
export const Userlist = styled.div`
  //   max-width: 500px;
  border: 1px solid black;
  border-radius: 6px;
  //   margin: 2rem auto;
  padding: 0.5rem 1.5rem;
  //   background-color: rgba(5, 14, 30, 0.75);
`;
export const Usercard = styled.div`
  max-width: 500px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //   flex-wrap: wrap;
  border-radius: 6px;
  margin: 2rem auto;
  padding: 1rem 1.5rem;
  //   background-color: rgba(5, 14, 30, 0.75);
`;
export const Error = styled.p`
  color: red;
  font-size: 0.7rem;
  padding: 0;
  margin: 0;
  font-weight: 600;
  text-align: left;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;
export const Li = styled.li`
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  padding-right: 5rem;
  color: rgb(66, 65, 68);
  text-align: center;
`;
export const Nav = styled.nav`
  background-color: rgb(249, 222, 225);
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
`;
export const DarkTheme = styled.div`
  background-color: black;
  color: white;
`;
export const LightTheme = styled.div`
  background-color: white;
  color: black;
`;
