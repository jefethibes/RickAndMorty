import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const MenuBar = styled(AppBar)`
  background-color: black;
  font-size: 25px;
`;

const ButtonNav = styled(Link)`
  color: white;
  margin-right: 30px;
  text-decoration: none;
  :hover {
    background-color: grey;
  }
`;

export default function Header() {
  return (
    <Box>
      <MenuBar>
        <Toolbar>
          <ButtonNav to="/">Home</ButtonNav>
          <ButtonNav to="/characters">Characters</ButtonNav>
          <ButtonNav to="/locations">Locations</ButtonNav>
          <ButtonNav to="/episodes">Episodes</ButtonNav>
        </Toolbar>
      </MenuBar>
    </Box>
  );
}
