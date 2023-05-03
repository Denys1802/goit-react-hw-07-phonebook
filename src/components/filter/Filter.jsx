import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilteredContact } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilteredContact(e.target.value.toLowerCase()));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};
