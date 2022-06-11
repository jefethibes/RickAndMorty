import { Box, Card, CardContent } from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ILocation, IInfo } from "../data/dataTypes";
import { getLocations } from "../data/connectionsLocation";

const LocationCard = styled(Card)`
  :hover {
  }
`;

export default function Locations() {
  const [locations, setLocations] = useState<ILocation[] | null>(null);
  const [infoResult, setInfoResult] = useState<IInfo | null>(null);

  useEffect(() => {
    async function getDataLocations() {
      const { info, results} = await getLocations();
      setLocations(results);
      setInfoResult(info);
    }
    getDataLocations();
  }, []);
  {console.log(infoResult)}
  {console.log(locations)}
  return (
    <Box>
      <LocationCard>
        <CardContent>teste teste</CardContent>
      </LocationCard>
    </Box>
  );
}
