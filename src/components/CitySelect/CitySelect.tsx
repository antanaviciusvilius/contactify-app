import MenuItem from '@mui/material/MenuItem';
import FilterTextField from '../FilterTextField/FilterTextField';

const CitySelect = () => {
  return (
    <FilterTextField
      select
      label="City"
      defaultValue=""
      size='small'
    >
      <MenuItem value="test">
        Test
      </MenuItem>
      <MenuItem value="test 2">
        Test 2
      </MenuItem>
    </FilterTextField>
  );
};

export default CitySelect;
