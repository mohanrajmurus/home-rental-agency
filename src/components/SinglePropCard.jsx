import React from 'react'

const SinglePropCard = (props) => {
  const {title,image,type,price,bed,size,shower,icons} = props.prop
  // console.log(title);
  return (
    <ul className='property--list__item' key={props.index}>
      <li className='property--list__item__image'><img src={image} alt="rooms" />
      </li>
      <li className='property--list__item__title'>
        <h3>{title}</h3>
      </li>
      <li className='property--list__item__type'>
        <span>{type}</span>
      </li>
      <li className='property--list__item__price'>
        <p>$<span>{price}/Month</span></p>
      </li>
      <li className='property--list__item__properties'>
        <span className='icons'>
          <img src={icons.bed} alt="bed" />
          <span>{bed}</span>
        </span>
        <span className='icons'>
          <img src={icons.shower} alt="shower" />
          <span>{shower}</span>
        </span>
        <span className='icons'>
          <img src={icons.size} alt="room-size" />
          <span>{size}</span>
        </span>
      </li>
    </ul>
  )
}

export default SinglePropCard