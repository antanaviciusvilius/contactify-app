import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Table, TableBody, TableContainer, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FunctionComponent } from "react";
import { Contact } from "../../types/Contact";
import './DataTable.scss';

export interface DataTableProps {
  contacts: Contact[];
}

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

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  'td, th': {
    position: 'relative'
  }
}));

const DataTable: FunctionComponent<DataTableProps> = ({contacts}) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="contacts table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell align="center">
              <FontAwesomeIcon icon={faEye} fontSize={16} />
            </StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">
              <FontAwesomeIcon icon={faBars} fontSize={16} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {contacts.map((contact) => (
            <StyledTableRow key={contact.name}>
              <StyledTableCell scope="row">
                {contact.name} {contact.surname[0]}.
              </StyledTableCell>
              <StyledTableCell>{contact.city}</StyledTableCell>
              <StyledTableCell align="center">
                <FontAwesomeIcon icon={faEye} fontSize={16}/>
              </StyledTableCell>
              <StyledTableCell>{contact.email}</StyledTableCell>
              <StyledTableCell align="right">{contact.phone}</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
