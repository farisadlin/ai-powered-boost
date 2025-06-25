import { createClient } from '@sanity/client'

// Environment variables validation
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03'
const useCdn = import.meta.env.VITE_SANITY_USE_CDN === 'true'

if (!projectId) {
  throw new Error(
    'Missing VITE_SANITY_PROJECT_ID environment variable. Please check your .env file.'
  )
}

export const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion,
  // Optional: Add token for authenticated requests
  // token: import.meta.env.SANITY_TOKEN,
})

// Optional: Export types for better TypeScript support
export interface SanityImageAsset {
  _id: string
  url: string
  metadata?: {
    dimensions: {
      width: number
      height: number
    }
  }
}

export interface SanityImage {
  asset: SanityImageAsset
  alt?: string
}