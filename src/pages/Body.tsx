import Home from "./Home";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Locations from "./Locations";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";
import { IInfo } from "../data/dataTypes";
import PaginationItems from "./PaginationItems";

const BodyBox = styled(Box)`
  margin-top: 75px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: rgb(31, 30, 30);
`

export default function Body() {
  const [infoResults, setInfoResults] = useState<IInfo | null>(null);

  return (
    <BodyBox>
      <PaginationItems infoResults={infoResults}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/locations">
          <Locations setInfoResults={setInfoResults} />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BodyBox>
  );
}
