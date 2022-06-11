import Home from "./Home";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Locations from "./Locations";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const BodyBox = styled(Box)`
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  background: #8b8b8b;
`

export default function Body() {
  return (
    <BodyBox>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BodyBox>
  );
}
