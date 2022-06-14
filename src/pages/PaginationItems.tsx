import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { IInfo } from "../data/dataTypes";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useState } from "react";
import { Link } from "react-router-dom";

const BoxPagination = styled(Box)`
  text-align: center;
  color: white;
`;

const ButtonPagination = styled(Link)`
  color: white;
  text-decoration: none;
`;

const TitlesPagination = styled.h3`
  display: inline;
  margin-left: 15px;
  margin-right: 15px;
`

interface IPaginationItemsProps {
  infoResults: IInfo | null;
}

export default function PaginationItems(props: IPaginationItemsProps) {
  let [page, setPage] = useState<number>(1);

  if (props?.infoResults) {
    var { pages } = props.infoResults;
  }

  function handleNext() {
    if (page < pages) {
      setPage((page += 1));
    }
  }

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <BoxPagination>
      <h3>Total Pages {pages}</h3>
      <ButtonPagination
        to={(location) => `${location.pathname}?page=${page}`}
        onClick={handlePrev}
      >
        <ArrowCircleLeftIcon style={{ verticalAlign: "middle" }} /> Prev
      </ButtonPagination>
      <TitlesPagination>{page}</TitlesPagination>
      <ButtonPagination
        to={(location) => `${location.pathname}?page=${page}`}
        onClick={handleNext}
      >
        Next <ArrowCircleRightIcon style={{ verticalAlign: "middle" }} />
      </ButtonPagination>
    </BoxPagination>
  );
}
