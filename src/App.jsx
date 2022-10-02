import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState()
  const [date, setDate] = useState('2022-09-29')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://api.nasa.gov/planetary/apod?api_key=34ZlbmbnE1DYKI9weMLfd7Nhv2hradQHiflJbldb&date=${date.input}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    try {
      fetchItems()
    } catch (err) {
      console.log(err)
    }
  }, [date])

  return (
    <>
      <Header />
      <Button getDate={(d) => setDate(d)} />
      <Card isLoading={isLoading} items={items} />
    </>
  )
}

export default App
