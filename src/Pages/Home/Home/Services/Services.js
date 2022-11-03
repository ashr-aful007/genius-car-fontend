import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
     const [services, setServices] = useState([])
     useEffect(()=>{
          fetch('service.json')
          .then(res => res.json())
          .then(data => setServices(data))
     },[])
     return (
          <div className='text-center mb-5'>
               <p className="text-2xl font-bold text-orange-600">services</p>
               <h2 className='text-5xl font-semibold'>Our Service Area</h2>
               <p className='mb-4'>the majority have suffered alteration in some form, by injected <br/>humour, or randomised words which don't look even slightly believable. </p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                         services.map(service => <ServiceCard
                         key={service._id}
                         service={service}
                         ></ServiceCard>)
                    }
               </div>
          </div>
     );
};

export default Services;