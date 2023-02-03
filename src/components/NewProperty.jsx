import React from 'react'
import InputComponent from './InputComponent'
const NewProperty = () => {
  return (
    <div className='newproperty--container'>
      <p className='info'>Your property with us and be Confident that Your Room will be Filled Out!</p>
      <div className="newproperty--container__addproperty">
        <p className='title'>Add a new property</p>
        <form className='add--property__form'>
          <div className="grid">
          <div>
            <p>Name<span>*</span></p>
            <InputComponent type='text' placeholder='Enter Name'/>
          </div>
          <div>
            <p>Address<span>*</span></p>
            <InputComponent type='text' placeholder='Enter Address'/>
          </div>
          <div>
            <p>Unit Number<span>*</span></p>
            <InputComponent type='text' placeholder='Enter Unit'/>
          </div>
          <div>
            <p>City<span>*</span></p>
            <select>
              <option >Select City</option>
            </select>
            </div>
            <div>
              <p>State<span>*</span></p>
              <select>
                <option >Select State</option>
              </select>
            </div>
            <div>
              <p>Room Type<span>*</span></p>
              <select>
                <option >Select Room Type</option>
              </select>
            </div>
          </div>
            <div className='description'>
            <p>Description<span>*</span></p>
              <textarea cols="100" rows="10" placeholder='Enter Description'/>
            </div>
            <div className='photos'>
            <p>Upload Photos<span>*</span></p>
              <InputComponent type='file'/>
            </div>
            <div className='add__button'>
            <button>Add New Property</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default NewProperty