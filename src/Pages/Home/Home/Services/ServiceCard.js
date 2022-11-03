import React from 'react'

function ServiceCard({service}) {
     const {img, price, title} = service
  return (
          <div className="card card-compact w-auto bg-base-100 shadow-xl">
     <figure><img src={img} alt="Shoes" /></figure>
     <div className="card-body">
     <h2 className="card-title">{title}</h2>
     <p className='text-2xl text-orange-600 font-semibold text-start'>Price:$ {price}</p>
     <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
     </div>
     </div>
     </div>
  )
}


export default ServiceCard