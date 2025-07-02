import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/sanity'

export interface ContactInfo {
  _id: string
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  businessHours?: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  socialMedia?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    youtube?: string
  }
  isActive: boolean
}

const fetchContactInfo = async (): Promise<ContactInfo | null> => {
  const query = `
    *[_type == "contact" && isActive == true][0] {
      _id,
      email,
      phone,
      address {
        street,
        city,
        state,
        zipCode,
        country
      },
      businessHours {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
      },
      socialMedia {
        facebook,
        twitter,
        linkedin,
        instagram,
        youtube
      },
      isActive
    }
  `
  
  return await client.fetch(query)
}

export const useContact = () => {
  return useQuery({
    queryKey: ['contact'],
    queryFn: () => fetchContactInfo(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}