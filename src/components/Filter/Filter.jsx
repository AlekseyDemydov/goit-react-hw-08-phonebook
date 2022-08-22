import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelector';
import { filterContacts } from '../../redux/contacts/constactsSlice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        required
      />
    </label>
  );
};

export default Filter;
