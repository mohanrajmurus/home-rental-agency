import React from 'react'
import location from '../images/icons/location.svg'
import phone from '../images/icons/phone.svg'
import print from '../images/icons/print.svg'
import fb from '../images/icons/fb.svg'
import twitter from '../images/icons/twitter.svg'
import linkedin from '../images/icons/linkedin.svg'
import insta from '../images/icons/insta.svg'
import youtube from '../images/icons/youtube.svg'
/* import logo from '../images/logo.svg'
 */const Footer = () => {
  return (
    <footer className='footer'>
        <div className='logo'>
            {/* <img src={logo} alt="logo" /> */}
            <h1>Logo</h1>
        </div>
        <ul className="address">
           <li>
                <span className='address__bar'>
                    <img src={location} alt="location" />
                    <span>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span>
                </span>
               
            </li>
            <li className='phone-print'>
                <span>
                    <img src={phone} alt="phone" />
                    <span>(123) 456-7890</span>
                </span>
                <span>
                    <img src={print} alt="phone" />
                    <span>(123) 456-7890</span>
                </span>
                
            </li>
            <li>
                <span className='socialmedia'>
                    <span>Social Media</span>
                    <span className='sociallinks'>
                        <img src={fb} alt='social' />
                        <img src={linkedin} alt='social' />
                        <img src={twitter} alt='social' />
                        <img src={youtube} alt='social' />
                        <img src={insta} alt='social' />
                    </span>
                </span>
            </li>
        </ul>

    </footer>
  )
}

export default Footer