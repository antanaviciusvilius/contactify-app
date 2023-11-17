import { TableRow, styled } from "@mui/material";

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  'td, th': {
    position: 'relative'
  }
}));

export default StyledTableRow;