import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Paper, Table, TableBody, TableContainer, TableSortLabel } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { visuallyHidden } from '@mui/utils';
import { FunctionComponent, useEffect, useState } from "react";
import { descendingComparator } from "../../helpers/sortHelper";
import { Contact } from "../../types/Contact";
import './DataTable.scss';
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

export interface DataTableProps {
  contacts: Contact[];
}

interface HeadCellBase {
  id: keyof Contact;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  sortable?: boolean;
}

type HeadCellIcon = {
  icon: IconProp;
  label?: string;
}

type HeadCellLabel = {
  label: string;
  icon?: IconProp;
}

type HeadCell = HeadCellBase & (HeadCellIcon | HeadCellLabel);

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    id: 'city',
    label: 'City',
  },
  {
    id: 'isActive',
    icon: faEye,
    align: 'center'
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'phone',
    label: 'Phone',
    align: 'right'
  },
];

const DataTable: FunctionComponent<DataTableProps> = ({ contacts }) => {
  const [orderBy, setOrderBy] = useState<keyof Contact>('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [computedContacts, setComputedContacts] = useState(contacts);

  const handleRequestSort = (
    property: keyof Contact,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    const mutatedArray = [...contacts];
    const sortedArray = mutatedArray.sort((a, b) => {
      return order === 'desc'
        ? descendingComparator(a, b, orderBy)
        : -descendingComparator(a, b, orderBy);
    });
    setComputedContacts(sortedArray);
  }, [orderBy, order, contacts]);

  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="contacts table" stickyHeader>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <StyledTableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
                align={headCell.align}
              >
                {headCell.sortable ? (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={() => handleRequestSort(headCell.id)}
                  >
                    {headCell.label ?? <FontAwesomeIcon icon={(headCell as HeadCellIcon).icon} fontSize={16} />}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                ) : headCell.label ?? <FontAwesomeIcon icon={(headCell as HeadCellIcon).icon} fontSize={16} />}
              </StyledTableCell>
            ))}
            <StyledTableCell align="right">
              <FontAwesomeIcon icon={faBars} fontSize={16} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {computedContacts.map((contact) => (
            <StyledTableRow key={contact.name}>
              <StyledTableCell scope="row">
                {contact.name} {contact.surname[0]}.
              </StyledTableCell>
              <StyledTableCell>{contact.city}</StyledTableCell>
              <StyledTableCell align="center">
                {contact.isActive && <FontAwesomeIcon icon={faEye} fontSize={16} />}
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
