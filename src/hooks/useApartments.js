import { useEffect, useState } from 'react'
import { getApartments, postApartment } from '../api/apartments'

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

  const addApartment = async (apartment) => {
    try {
      await postApartment(apartment)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchApartments()
  }, [])

  return { isLoading, apartmentsList, addApartment }
}
