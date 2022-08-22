import Form from './Form/Form';
import Filter from './Filter/Filter';
import FormList from './FormList/FormList';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.box}>
      <div className={s.boxPhone}>
        <h1>Phonebook</h1>
        <Form />

        <Filter />
      </div>
      <div className={s.contacts}>
        <h2>Contacts</h2>
        <FormList />
      </div>
    </div>
  );
};

export default App;
