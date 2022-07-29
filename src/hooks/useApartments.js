import { useEffect, useState } from 'react'
import { getApartmentDetails, getApartments, postApartment } from '../api/apartments'

export const useApartments = () => {
  const [details, setDetails] = useState()
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
      console.log('Error loading list: ', err)
    }
  }

  const addApartment = async (apartment) => {
    try {
      await postApartment(apartment)
    } catch (err) {
      console.log('Error creating new apartment: ', err)
    }
  }

  const fetchApartmentDetails = async (id) => {
    try {
      const res = await getApartmentDetails(id)
      console.log('fetched: ', res.data)
      setDetails(res.data)
    } catch (err) {
      console.log('Error fetching details: ', err)
    }
  }

  useEffect(() => {
    fetchApartments()
  }, [])

  return { isLoading, apartmentsList, addApartment, details, fetchApartmentDetails }
}
