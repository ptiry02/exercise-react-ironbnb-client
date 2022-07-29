import { useEffect, useState } from 'react'
import { getApartments } from '../api/apartments'

export const useApartments = () => {
  const [apartmentsList, setApartmentsList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchApartments = async () => {
    try {
      setIsLoading(true)
      const res = await getApartments()
      setApartmentsList(res.data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchApartments()
  }, [])

  return { apartmentsList, isLoading }
}
