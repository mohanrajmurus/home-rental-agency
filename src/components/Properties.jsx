import React from 'react'
import SinglePropCard from './SinglePropCard';
import room_1_image from '../images/rooms/r1.jpeg';
import room_2_image from '../images/rooms/r2.jpeg';
import room_3_image from '../images/rooms/r3.jpeg';
import room_4_image from '../images/rooms/r4.jpeg';
import room_5_image from '../images/rooms/r5.jpeg';
import room_6_image from '../images/rooms/r6.jpeg';
import Bed from '../images/icons/Bed.svg';
import Shower from '../images/icons/Shower.svg';
import Size from '../images/icons/Size.svg';

const Properties = () => {
    const roomProperty = [
        {
            title:'2578 Folsom street, san francisco, CA, 94110',
            image:room_1_image,
            type:'Private Room',
            price:'1200',
            bed:'4',
            size:'2',
            shower:'2',
            icons:{
                bed:Bed,
                size:Size,
                shower:Shower
            }
        },
        {
            title:'2578 Folsom street, san francisco, CA, 94110',
            image:room_2_image,
            type:'Private Room',
            price:'1200',
            bed:'4',
            size:'2',
            shower:'2',
            icons:{
                bed:Bed,
                size:Size,
                shower:Shower
            }
        },
        {
            title:'2578 Folsom street, san francisco, CA, 94110',
            image:room_3_image,
            type:'Private Room',
            price:'1200',
            bed:'4',
            size:'2',
            shower:'2',
            icons:{
                bed:Bed,
                size:Size,
                shower:Shower
            }
        },
        {
            title:'2578 Folsom street, san francisco, CA, 94110',
            image:room_4_image,
            type:'Private Room',
            price:'1200',
            bed:'4',
            size:'2',
            shower:'2',
            icons:{
                bed:Bed,
                size:Size,
                shower:Shower
            }
        },
        {
            title:'2578 Folsom street, san francisco, CA, 94110',
            image:room_5_image,
            type:'Private Room',
            price:'1200',
            bed:'4',
            size:'2',
            shower:'2',
            icons:{
                bed:Bed,
                size:Size,
                shower:Shower
            }
        },
        {
            title:'2578 Folsom street, san francisco, CA, 94110',
            image:room_6_image,
            type:'Private Room',
            price:'1200',
            bed:'4',
            size:'2',
            shower:'2',
            icons:{
                bed:Bed,
                size:Size,
                shower:Shower
            }
        }
    ]
  return (
    <div className='property'>
        <div className='property__container'>
            <p className='property__title'><span>list</span> of properties</p>
            <button>View All Property</button>
        </div>
        <div className="property--list">
            {roomProperty.map((item,i) => {
                return <SinglePropCard prop={item} index={i} key={i}/>
            })}
        </div>
        <div className="property__pagination">
            <div className='property__pagination__handle'>
                <span>Prev</span>
                {[...Array(3)].map((_,i)=>{
                    return (<span>{i+1}</span>)
                })}
                <span>Next</span>
            </div>
        </div>
    </div>
  )
}

export default Properties