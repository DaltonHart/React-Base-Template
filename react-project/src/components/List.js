import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { bases: state.bases };
};


const ConnectedList = ({ bases }) => (
  <ul className='list-group list-group-flush'>
    {bases.map(base => (
      <li className='list-group-item' key={base.id}>
        {base.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;