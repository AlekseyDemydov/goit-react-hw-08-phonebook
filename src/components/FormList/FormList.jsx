import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContact,
  deleteContact,
} from '../../redux/contacts/contactsOperation';
import { getUserToken } from '../../redux/authorization/authorizationSelector';
import { getFilterContact } from '../../redux/contacts/contactsSelector';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './FormList.module.css';

const FormList = () => {
  const contacts = useSelector(getFilterContact);
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(getContact(token));
  }, [token, dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.con}>
          <p className={s.conName}>
            <span>{name}</span>: {number}
          </p>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Del
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default FormList;
