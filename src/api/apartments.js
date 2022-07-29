import { api } from './axios.config'

export const getApartments = () => api.get('/apartments')

export const getApartmentDetails = (apartmentId) => api.get(`/apartments/${apartmentId}`)

export const postApartment = (apartment) => api.post('/apartments', apartment)
