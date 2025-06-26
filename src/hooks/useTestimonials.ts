import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  imageUrl?: string;
  imageAlt?: string;
  featured: boolean;
  order?: number;
}

const fetchTestimonials = async (
  featuredOnly?: boolean
): Promise<Testimonial[]> => {
  const filter = featuredOnly
    ? '[_type == "testimonial" && featured == true]'
    : '[_type == "testimonial"]';
  const query = `
    *${filter} | order(featured desc, rating desc, order asc) [0...6] {
      _id,
      name,
      role,
      company,
      content,
      rating,
      featured,
      order,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    }
  `;

  return await client.fetch(query);
};

export const useTestimonials = (featuredOnly?: boolean) => {
  return useQuery({
    queryKey: ['testimonials', featuredOnly],
    queryFn: () => fetchTestimonials(featuredOnly),
    staleTime: 0, // Always fetch fresh data
    gcTime: 0, // Don't cache data
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}
