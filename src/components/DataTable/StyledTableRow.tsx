import { TableRow, styled, tableRowClasses } from "@mui/material";

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    cursor: 'pointer',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  'td, th': {
    position: 'relative'
  }
}));

export default StyledTableRow;