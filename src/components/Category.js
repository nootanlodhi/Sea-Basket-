import React from 'react'
import './navbar.css'

const Category = ({item}) => {
  return (
    <div className='main-category-div'>
       <h1> CATEGORIES</h1>
        <div className='category-card-v'>
            {
               item.map((item)=>{
                   return(
            <div className='card-item-div'>
                {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzs0dyTWNvo2mIr7fNpbkMnZDiZIdg8bojQ&usqp=CAU' alt=''/> */}
                <img src={item.image} alt=''/>
                <h2>{item.heading}</h2>
            </div>)
            })
          }
        </div>
        <div className='main-product-div'>
          <h1>A GLANCE AT OUR PRODUCT</h1>
          <div className='glance-product-div'>
          <i className="fa-solid fa-circle-play icon"></i>
          </div>
          <h1 className='faqs-heading'>FAQS</h1>
        </div>
    </div>
  )
}

export default Category