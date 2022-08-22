import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilterContact } from 'redux/contacts/contactsSelector';
import {
  deleteContact,
  getContact,
} from '../../redux/contacts/contactsOperation';
import s from './FormList.module.css';

const FormList = () => {
  const items = useSelector(getFilterContact);
  // const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  // const filteredContacts = items.filter(el =>
  //   el.name.toLowerCase().includes(filter.toLowerCase())
  // );

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <ul className={s.contact}>
      {items.map(el => (
        <li key={el.id} className={s.con}>
          <p className={s.conName}>
            {el.name}: <span>{el.phone}</span>
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(deleteContact(el.id))}
          >
            del
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FormList;
