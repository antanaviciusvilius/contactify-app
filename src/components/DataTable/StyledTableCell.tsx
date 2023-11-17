import { TableCell, styled, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  '&:not(:first-of-type):before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    height: '16px',
    width: '2px',
  },
  [`&.${tableCellClasses.head}:before`]: {
    backgroundColor: '#FDFCFF'
  },
  [`&.${tableCellClasses.body}:before`]: {
    backgroundColor: '#0060A80D'
  }
}));

export default StyledTableCell;