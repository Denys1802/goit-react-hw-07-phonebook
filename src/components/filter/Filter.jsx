import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilter, getFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};
