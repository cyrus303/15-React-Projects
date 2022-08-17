import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      //todo display alert here
      showAlert(true, 'danger', 'please enter a value');
    } else if (name && isEditing) {
      //todo deal with editing
    } else {
      //todo show alert
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime.toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  function showAlert(show = false, type = '', msg = '') {
    setAlert({ show, type, msg });
  }

  function clearList() {
    showAlert(true, 'danger', 'list cleared');
    setList([]);
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
