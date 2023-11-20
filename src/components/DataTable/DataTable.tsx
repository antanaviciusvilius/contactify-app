import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Paper, Table, TableBody, TableContainer, TableSortLabel } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { visuallyHidden } from '@mui/utils';
import { FunctionComponent, useEffect, useState } from "react";
import formatContactName from "../../helpers/formatContactName";
import { descendingComparator } from "../../helpers/sortHelper";
import { Contact } from "../../types/Contact";
import './DataTable.scss';
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";
import TableCellOption from "./TableCellOption";

export interface DataTableProps {
  contacts: Contact[];
  onContactSelect: (contactId: string) => void;
}

type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

interface CellBase {
  id: keyof Contact;
  headAlign?: Align;
  bodyAlign?: Align;
  sortable?: boolean;
  toggleable: boolean;
  formatFn?: (row: Contact) => string | JSX.Element | boolean;
}

type CellIcon = {
  icon: IconProp;
  label?: string;
}

type CellLabel = {
  label: string;
  icon?: IconProp;
}

type Cell = CellBase & (CellIcon | CellLabel);

export type TableHeadOption = {
  checked: boolean
} & Pick<Cell, 'id' | 'label'>;

const cells: readonly Cell[] = [
  {
    id: 'name',
    label: 'Name',
    sortable: true,
    toggleable: true,
    formatFn: (row: Contact) => {
      return formatContactName(row);
    }
  },
  {
    id: 'city',
    label: 'City',
    toggleable: true
  },
  {
    id: 'isActive',
    icon: faEye,
    headAlign: 'center',
    bodyAlign: 'center',
    toggleable: false,
    formatFn: (row: Contact) => {
      return row.isActive && <FontAwesomeIcon icon={faEye} fontSize={16} color="#0000008A"/>;
    }
  },
  {
    id: 'email',
    label: 'Email',
    toggleable: true
  },
  {
    id: 'phone',
    label: 'Phone',
    headAlign: 'right',
    bodyAlign: 'right',
    toggleable: true
  },
];

const DataTable: FunctionComponent<DataTableProps> = ({ contacts, onContactSelect }) => {
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

  const handleOnContactClick = (contact: Contact) => {
    onContactSelect(contact.id);
  };

  const getToggleableCells = (): TableHeadOption[] => {
    return cells
      .filter(cell => cell.toggleable)
      .map(cell => ({
        id: cell.id,
        label: cell.label,
        checked: true
      }));
  };

  const [toggleableCells, setToggleableCells] = useState<TableHeadOption[]>(getToggleableCells());

  const isCellVisible = (cellId: string) => {
    const isCellToggleable = cells.find((cell) => cell.id === cellId)?.toggleable;
    if (!isCellToggleable) return true;
    return toggleableCells.find((cell) => cell.id === cellId)?.checked;
  };

  const handleCellsChange = (options: TableHeadOption[]) => {
    setToggleableCells(options);
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
            {cells.map((cell) => {
              if (isCellVisible(cell.id)) return (
                <StyledTableCell
                  key={cell.id}
                  sortDirection={orderBy === cell.id ? order : false}
                  align={cell.headAlign}
                >
                  {cell.sortable ? (
                    <TableSortLabel
                      active={orderBy === cell.id}
                      direction={orderBy === cell.id ? order : 'asc'}
                      onClick={() => handleRequestSort(cell.id)}
                    >
                      {cell.label ?? <FontAwesomeIcon icon={(cell as CellIcon).icon} fontSize={16} />}
                      {orderBy === cell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  ) : cell.label ?? <FontAwesomeIcon icon={(cell as CellIcon).icon} fontSize={16} />}
                </StyledTableCell>
              );
            })}
            <TableCellOption options={toggleableCells} onOptionChecked={handleCellsChange}/>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {computedContacts.map((contact) => (
            <StyledTableRow key={contact.name} onClick={() => handleOnContactClick(contact)}>
              {cells.map((cell) => {
                if (isCellVisible(cell.id)) return (
                  <StyledTableCell key={cell.id} align={cell.bodyAlign}>
                    {cell.formatFn ? cell.formatFn(contact) : contact[cell.id]}
                  </StyledTableCell>
                );
              })}
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
