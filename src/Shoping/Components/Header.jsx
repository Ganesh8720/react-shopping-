import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className='tittle'>
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>Woman</li>
                <li>Men</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className='search'>
            <input type="search" name="" id="" placeholder='Search'/>

        </div>
        <div className='right'>
            <div className='signin'>
                Signin / SignUP
            </div>
            <div className='cart'>
                cart
            </div>
        </div>



    </div>
  )
}

export default Header