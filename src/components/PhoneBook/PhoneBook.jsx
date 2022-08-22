import FormList from '../FormList/FormList';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

function Phonebook() {
  return (
    <div>
      <div>
        <Form />
        <Filter />
      </div>
      <FormList />
    </div>
  );
}

export default Phonebook;
