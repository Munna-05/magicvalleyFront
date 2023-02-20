import React from 'react'


import BarSection from '../Components/BarSection'
import Footer from '../Components/Footer'
import ImageSection from '../Components/ImageSection'
import Main from '../Components/Main'
import Second from '../Components/Second'
import Third from '../Components/Third'

import styles from '../Components/styles.css'

const Home = () => {
    const logo = 'MagicValley'
  return (
    <div>
        {/* <Navbar logo = {logo} one='Home' two ='About' three='Booking' four='Contacts' five='Events' /> */}

        {/* first section */}
        <Main desc='Camping in the Woods in the Best Way'/>
        {/* bar section */}
        <BarSection first='Experience' second='Adventures' third='Happy Customers' fourth='Ratings'/>
        {/* second section */}
        <Second companyName='Magic Valley' one='Adventure Awaits!!!' two='Best Camp Guide' three='Easy Booking'/>
        {/* images */}
        <div className={styles.container}>
            
        <ImageSection/>
        </div>
       <Third main='Forest, Starry Night, Camp Fire What Else Do You Need?'/>
        {/* footer */}
        <Footer companyName='MagicValley' desc='We always makes our customers Happy by providing as many choices as possible.' one='Company' two='Resource' three='Support' four='Contact'/>

    </div>
  )
}

export default Home