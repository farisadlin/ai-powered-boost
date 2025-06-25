import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/sanity'

export interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  features: string[]
  icon: string
  featured: boolean
  order?: number
}

const fetchServices = async (featuredOnly?: boolean): Promise<Service[]> => {
  const filter = featuredOnly ? '[_type == "service" && featured == true]' : '[_type == "service"]'
  const query = `
    *${filter} | order(featured desc, order asc) {
      _id,
      title,
      slug,
      description,
      features,
      icon,
      featured,
      order
    }
  `
  
  return await client.fetch(query)
}

export const useServices = (featuredOnly?: boolean) => {
  return useQuery({
    queryKey: ['services', featuredOnly],
    queryFn: () => fetchServices(featuredOnly),
    staleTime: 0, // Always fetch fresh data
    gcTime: 0, // Don't cache data
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}