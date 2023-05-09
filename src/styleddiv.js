import styled from "styled-components";
const StatusDiv = styled.div`
  width: 60%;
  height: 100px;
  margin: 1rem auto;
  border: 1px solid black;
  border-radius: 6px;
  background-color: ${(props) =>
    props.status === "success"
      ? "green"
      : props.status === "warning"
      ? "yellow"
      : props.status === "error"
      ? "red"
      : "white"};
`;
export default StatusDiv;
