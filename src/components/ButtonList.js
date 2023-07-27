import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list = ['All','Music','Gaming','Songs','Music','Cricket','New to you','AI']
  return (
    <div className='flex'>
      {list.map(data => 
       <Button name={data}/>)}
    </div>
  )
}

export default ButtonList