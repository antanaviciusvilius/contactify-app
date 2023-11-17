import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Paper, Table, TableBody, TableContainer, styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './DataTable.scss';

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

const rows = [
  {
    "city": "Gorouso",
    "isActive": true,
    "surname": "Martelli",
    "id": "635b85baef6d933a68be1615",
    "email": "ela@gmail.com",
    "phone": "(355) 886-5350",
    "name": "Julian"
  },
  {
    "city": "Gugdivo",
    "isActive": true,
    "surname": "Wheeler",
    "id": "635b85baef6d933a68be1613",
    "email": "dan@gmail.com",
    "phone": "(554) 269-1332",
    "name": "Lenora"
  },
  {
    "city": "Jurajoba",
    "isActive": false,
    "surname": "Marsh",
    "id": "635b85baef6d933a68be1614",
    "email": "omfet@gmail.com",
    "phone": "(552) 343-7116",
    "name": "Willie"
  },
  {
    "city": "Cepcoew",
    "isActive": true,
    "surname": "Ramirez",
    "id": "635b85baef6d933a68be1618",
    "email": "ogefadu@gmail.com",
    "phone": "(532) 598-8290",
    "name": "Herbert"
  },
  {
    "city": "Resokboh",
    "isActive": false,
    "surname": "Nesi",
    "id": "635b85baef6d933a68be1611",
    "email": "lotedbo@gmail.com",
    "phone": "(801) 567-9785",
    "name": "Eleanor"
  },
  {
    "city": "Pidjapal",
    "isActive": true,
    "surname": "Favilli",
    "id": "635b85baef6d933a68be1612",
    "email": "do@yahoo.com",
    "phone": "(648) 510-2470",
    "name": "Blanche"
  },
  {
    "city": "Kodbimde",
    "isActive": false,
    "surname": "Morley",
    "id": "635b85b9ef6d933a68be1610",
    "email": "raspa@yahoo.com",
    "phone": "(989) 825-5946",
    "name": "Howard"
  },
  {
    "city": "Iliobcan",
    "isActive": false,
    "surname": "Frullini",
    "id": "635b85baef6d933a68be1619",
    "email": "caati@gmail.com",
    "phone": "(958) 744-2064",
    "name": "Marie"
  },
  {
    "city": "Vowufni",
    "isActive": false,
    "surname": "Carroll",
    "id": "635b85baef6d933a68be1616",
    "email": "solodide@gmail.com",
    "phone": "(519) 657-1897",
    "name": "Keith"
  },
  {
    "city": "Wefoibi",
    "isActive": true,
    "surname": "Beck",
    "id": "635b85baef6d933a68be1617",
    "email": "cu@yahoo.com",
    "phone": "(635) 907-3992",
    "name": "Timothy"
  }
];

function DataTable() {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              Name
              <Divider orientation="vertical" flexItem />
            </StyledTableCell>
            
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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell scope="row">
                {row.name} {row.surname[0]}.
              </StyledTableCell>
              <StyledTableCell>{row.city}</StyledTableCell>
              <StyledTableCell align="center">
                <FontAwesomeIcon icon={faEye} fontSize={16}/>
              </StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
