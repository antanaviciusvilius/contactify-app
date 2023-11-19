import MenuItem from '@mui/material/MenuItem';
import { StandardTextFieldProps } from '@mui/material/TextField';
import { FunctionComponent } from 'react';
import FilterTextField from '../FilterTextField/FilterTextField';

interface CitySelectProps extends StandardTextFieldProps {
  options: string[];
}

const CitySelect: FunctionComponent<CitySelectProps> = (props) => {
  return (
    <FilterTextField
      {...props}
      select
      label="City"
      defaultValue=""
      size='small'
    >
      <MenuItem value="">
        Clear city filter
      </MenuItem>
      {props.options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </FilterTextField>
  );
};

export default CitySelect;
