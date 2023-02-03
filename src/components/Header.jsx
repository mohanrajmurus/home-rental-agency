import React from 'react'
import NavBar from './NavBar'
import bg from '../images/background.jpg';
import map from '../images/map.svg'
import searchIcon from '../images/search.svg';
const Header = () => {
  return (
    <header className='header'>
        {<img className='bg--image' src={bg} alt="" />}
        <NavBar />
        <div className='header--content'>
            <div className='header--content__left'>
                <h1>The Most Affortable Place To Stay In The
                    San Franciso Bay Area
                </h1>
            </div>
            <div className='header--content__right'>
                <div className='map'>
                    <img src={map} alt="map" />
                </div>
                <div className='search--map'>
                    <span className='home--type'>
                        <select>
                            <option value="all-type">All Type</option>
                            <option value='1-BHK'>1-BHK</option>
                            <option value='2-BHK'>3-BHK</option>
                            <option value='3-BHK'>3-BHK</option>
                        </select>
                    </span>
                    <span className='home--distance'>
                    <select>
                            <option value="neighborhood">Neighborhood</option>
                            <option value='1-3 km'>1-3 km</option>
                            <option value='3-5 km'>3-5 km</option>
                            <option value='5-10 km'>5-10 km</option>
                        </select>
                    </span>
                    <span className='search--icon'>
                        <img src={searchIcon} alt="search" />
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header