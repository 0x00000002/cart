import React from 'react'

const List = (props) => (
  <div className={'list'}>
    <h2>Products</h2>
    { props.data.map(({ id, name, price }) =>
      <div key={id}>
        <span>{name}</span> <span>{price}</span>
      </div>
    )}
  </div>
)

export default List
