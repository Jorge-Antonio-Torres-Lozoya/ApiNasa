import { useState, useEffect } from 'react'
// import useGetData from '../hooks/useGetData'

const Button = ({ getDate }) => {
  const [input, setInput] = useState('2022-09-29')
  const onClick = (input) => {
    getDate({ input })
  }

  useEffect(() => {
    onClick(input)
  }, [])
  return (

    <div className='d-flex justify-content-center gap-3'>
      <input type='date' value={input} min='1995-06-16' max='2022-09-29' onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onClick(input)} type='button' className='btn btn-outline-primary'> Search </button>
    </div>
  )
}

export default Button
