import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CitySelect from '../CitySelect/CitySelect';
import FilterTextField from '../FilterTextField/FilterTextField';
import './Filters.scss';

function Filters() {
  return (
    <section className="filters-container">
      <FilterTextField
        label="Name"
        type="name"
      />

      <CitySelect />

      <FormControlLabel 
        control={<Checkbox defaultChecked />} 
        label={
          <>
            <span className="show-activity-label">Show Active</span>
            <FontAwesomeIcon icon={faEye} />
          </>
        } 
      />

      <Button variant="contained" color="primary" type="button">Filter</Button>
    </section>
  );
}

export default Filters;
