import React from 'react';
import propTypes from 'prop-types';

const Contacts = ({ contacts, detele }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => detele(id)}>
            dell
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  detele: propTypes.func.isRequired,
};

export default Contacts;
