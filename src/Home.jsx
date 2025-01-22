import React from 'react'
import Layout from './COMPONENTS/Layout'
import { CarouselWithCaptionsExample } from './COMPONENTS/HomeSec/HomeSec1'
import { HomeSec2 } from './COMPONENTS/HomeSec/HomeSec2'
import { HomeSec3 } from './COMPONENTS/HomeSec/HomeSec3'
import { HomeSec4 } from './COMPONENTS/HomeSec/HomeSec4'
import { HomeSec5 } from './COMPONENTS/HomeSec5';
import { HomeSec6 } from './COMPONENTS/HomeSec6'
import { HomeSec7 } from './COMPONENTS/HomeSec7'
import HomeSec8 from './COMPONENTS/HomeSec8'
import HomeSec9 from './COMPONENTS/HomeSec9'
import { HomeSec10 } from './COMPONENTS/HomeSec10'

const Home = () => {
  return (
     <Layout>
         {/* homebaner */}
         <CarouselWithCaptionsExample/>
         {/*short banner  */}
         <HomeSec2/>
         {/* icons sec */}
         <HomeSec3/>
         {/* our menu */}
         <HomeSec4/>
         {/* double banner */}
         <HomeSec5/>
         {/* notthing section */}
         <HomeSec6/>
         {/* download app */}
         <HomeSec7/>
         {/* client slider */}
         <HomeSec8/>
         {/* testimonial section */}
         <HomeSec9/>
         {/* short baner */}
         <HomeSec10/>
     </Layout>
  )
}

export default Home;