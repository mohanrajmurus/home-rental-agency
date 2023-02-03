import React from 'react'
import homeimage from '../images/main-content.jpeg'
import money_dollar from '../images/icons/money-doller.svg'
import community from '../images/icons/community.svg'
import eye from '../images/icons/eye.svg'
import plant from '../images/icons/plant.svg'
import shield from '../images/icons/shield-star.svg'
import stack from '../images/icons/stack.svg'

const Features = () => {
  const features =[
    {
      text:'Pay as Little as possible!',
      icon:money_dollar
    },
    {
      text:'Enjoy wisdom of community!',
      icon:community
    },
    {
      text:`Let's somebody else take care of Landlord!`,
      icon:stack
    },
    {
      text:'Enjoy peaceful Environment!',
      icon:plant
    },
    {
      text:'Stay Safe! Save Money!',
      icon:shield
    },
    {
      text:'Pay for what you use !',
      icon:eye
    }
  ]
  return (
    <div>
      <p><span>minimum living cost</span> takes care of everything</p>
      <div className='features--content'>
        <div className='features--content__image'>
          <img src={homeimage} alt="home" />
        </div>
        <ul className="features--content__list">
          {features.map((item,i) => {
            return (
              <li className='features--content__list__item' key={i}>
                <span className='features--content__list__item__icon'>
                  <img src={item.icon} alt={item.text} />
                </span >
                <span className={item.text.includes('somebody')?'features--content__list__item__text special':'features--content__list__item__text'}>{item.text}</span>
              </li>
          )
         })}
        </ul>
      </div>
    </div>
  )
}

export default Features