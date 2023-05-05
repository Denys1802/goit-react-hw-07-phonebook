import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilteredContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilteredContact(event.target.value.toLowerCase()));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};
