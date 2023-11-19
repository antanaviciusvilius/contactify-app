import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FunctionComponent, useState } from 'react';
import { Contact } from '../../types/Contact';
import { FiltersType } from '../../types/FiltersType';
import CitySelect from '../CitySelect/CitySelect';
import FilterTextField from '../FilterTextField/FilterTextField';
import './Filters.scss';

interface FiltersProps {
  contacts: Contact[];
  onFilterClick: (filters: FiltersType) => void;
}

const Filters: FunctionComponent<FiltersProps> = (props) => {
  const [name, setName] = useState<string>();
  const [city, setCity] = useState<string>();
  const [activity, setActivity] = useState<boolean>(false);

  const getUniqueCities = (array: Contact[]) => {
    return [...new Set(array.map(item => item.city))];
  };

  const handleFilterClick = () => {
    props.onFilterClick({name, city, activity});
  };
  

  return (
    <section className="filters-container">
      <FilterTextField
        label="Name"
        type="name"
        defaultValue={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />

      <CitySelect 
        options={getUniqueCities(props.contacts)} 
        defaultValue={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCity(event.target.value);
        }} 
      />

      <FormControlLabel
        control={<Checkbox />}
        label={
          <>
            <span className="show-activity-label">Show Active</span>
            <FontAwesomeIcon icon={faEye} />
          </>
        }
        checked={activity}
        onChange={() => {
          setActivity(!activity);
        }}
      />

      <Button variant="contained" color="primary" type="button" onClick={handleFilterClick}>Filter</Button>
    </section>
  );
};

export default Filters;
