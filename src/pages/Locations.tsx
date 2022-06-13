import {
  Modal,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box
} from "@mui/material";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ILocation, IInfo } from "../data/dataTypes";
import { getLocations } from "../data/connectionsLocation";
import PublicIcon from "@mui/icons-material/Public";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ModalCharacters from "./ModalCharacters";

const LocationCard = styled(Card)`
  box-shadow: 0 0 5px gray;
  margin-left: 25px;
  margin-top: 25px;
  background: black;
  width: 250px;
  :hover {
    background: #640101;
  }
`;

const CardTypography = styled(Typography)`
  font-size: 12px;
  color: white;
`;

const IconTypography = styled(Typography)`
  text-align: center;
  color: white;
  margin-bottom: 5px;
`;

const ButtonTypography = styled(Typography)`
  margin-top: 10px;
  text-align: center;
`;

const CardButton = styled(Button)`
  color: white;
  border-color: white;
  :hover {
    border-color: black;
    color: black;
  }
`;

const BoxModal = styled(Box)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  box-shadow: 24;
  position: absolute;
  background-color: black;
  color: white;
  padding: 30px;
`;

interface ILocationsProps {
  setInfoResults: React.Dispatch<IInfo | null>
}

export default function Locations(props: ILocationsProps) {
  const [locations, setLocations] = useState<ILocation[] | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  useEffect(() => {
    async function getDataLocations() {
      const { info, results } = await getLocations();
      setLocations(results);
      props.setInfoResults(info);
    }
    getDataLocations();
  }, [props]);

  return (
    <Grid container>
      {locations?.map(({ id, name, type, dimension, residents, created }) => {
        return (
          <LocationCard key={id}>
            <CardContent>
              <IconTypography>
                <PublicIcon />
              </IconTypography>
              <CardTypography>Name: {name}</CardTypography>
              <CardTypography>Type: {type}</CardTypography>
              <CardTypography>Dimension: {dimension}</CardTypography>
              <CardTypography>Created: {created}</CardTypography>
              <ButtonTypography>
                <CardButton variant="outlined" onClick={handleOpen}>
                  Residents
                  <PeopleOutlineIcon />
                </CardButton>
              </ButtonTypography>
              <Modal
                open={modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <BoxModal>
                  <ModalCharacters residents={residents} setModal={setModal} />
                </BoxModal>
              </Modal>
            </CardContent>
          </LocationCard>
        );
      })}
    </Grid>
  );
}
