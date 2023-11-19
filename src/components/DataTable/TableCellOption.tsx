import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox, FormControlLabel, Menu, MenuItem, TableCellProps, tableCellClasses } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { TableHeadOption } from './DataTable';
import StyledTableCell from './StyledTableCell';

export interface TableCellOptionProps extends TableCellProps {
  options: TableHeadOption[];
  onOptionChecked: (options: TableHeadOption[]) => void;
}

const TableCellOption: FunctionComponent<TableCellOptionProps> = ({options, onOptionChecked}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionChecked = (checkedOption: TableHeadOption) => {
    const modifiedArray = options.map(option => checkedOption.id === option.id ? {...checkedOption, checked: !checkedOption.checked} : option);
    onOptionChecked(modifiedArray);
  };

  return (
    <>
      <StyledTableCell 
        align="right" 
        onClick={handleClick} 
        sx={{
          [`&.${tableCellClasses.root}`]: {
            backgroundColor: anchorEl && 'white',
            color: anchorEl && '#0082E0',
            verticalAlign: 'bottom',
            cursor: 'pointer'
          }
        }}
      >
        <FontAwesomeIcon icon={faBars} fontSize={16} />
      </StyledTableCell>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option.id}>
            <FormControlLabel
              control={<Checkbox />}
              label={option.label!}
              sx={{
                color: '#1A1C1E',
              }}
              checked={option.checked}
              onChange={() => {
                handleOptionChecked(option);
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TableCellOption;
