import { Box, Pagination, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { IInfo } from "../data/dataTypes";

const StackItems = styled(Stack)`
  align-items: center;
`;

const PagItems = styled(Pagination)``;

interface IPaginationItemsProps {
  infoResults: IInfo | null;
}

export default function PaginationItems(props: IPaginationItemsProps) {
  return (
    <Box>
      <StackItems>
        <PagItems
          count={props.infoResults?.pages}
          size="large"
          variant="outlined"
          showFirstButton
          showLastButton
          color="primary"
        />
      </StackItems>
    </Box>
  );
}
