import { BrowserRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Header from "./Header";
import Body from "./Body";

const BodyBox = styled(Box)`
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <BrowserRouter>
      <BodyBox>
        <Header />
        <Body />
      </BodyBox>
    </BrowserRouter>
  );
}

export default App;
