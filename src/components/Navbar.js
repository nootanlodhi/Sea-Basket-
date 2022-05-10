import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
      <>
    <div className='navbar'>
        <div className='inner-navbar-first'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuks2rnmpgx0aw31ALzKtBjkJ99BUncQ-Yrg&usqp=CAU' alt=''/>
        </div>
        <div className='inner-navbar-second'>
            <h2>Category</h2>
            <h2>FAQs</h2>
            <h2>My Chart</h2>
            <button>Login</button>
        </div>
        {/* <img src='https://image.shutterstock.com/image-vector/anatomy-fish-illustration-260nw-314717585.jpg' alt=''/> */}
    </div>
    <div className='third-navbar-div'>
    <img src='https://image.shutterstock.com/image-vector/anatomy-fish-illustration-260nw-314717585.jpg' alt='' className='second-image'/>
    <h1>HOW IT WORKS</h1>
    <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
    </div>
    </>
  )
}

export default Navbar