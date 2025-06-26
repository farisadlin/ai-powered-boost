import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: {
    name: string;
    image?: { asset: { url: string } };
    bio?: string;
    role?: string;
  };
  mainImage?: { asset: { url: string }; alt?: string };
  categories: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    color?: string;
  }>;
  publishedAt: string;
  excerpt?: string;
  body: PortableTextBlock[];
  featured?: boolean;
  estimatedReadingTime?: number;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    name,
    image,
    bio,
    role
  },
  mainImage{
      asset->{
        url
      },
      alt
  },
  categories[]->{
    _id,
    title,
    slug,
    color
  },
  publishedAt,
  excerpt,
  body,
  featured,
  estimatedReadingTime
}`;

const FEATURED_POSTS_QUERY = `
  *[_type == "post" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
      name,
      image{
        asset->{
          url
        },
        alt
      },
      role
    },
    mainImage{
      asset->{
        url
      },
      alt
    },
    categories[]->{
      title,
      color
    },
    publishedAt,
    excerpt,
    body,
    featured,
    readTime
  }
`;

const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{
      name,
      image{
        asset->{
          url
        },
        alt
      },
      role,
      bio,
      socialLinks
    },
    mainImage{
      asset->{
        url
      },
      alt
    },
    categories[]->{
      title,
      color
    },
    publishedAt,
    excerpt,
    body,
    featured,
    readTime
  }
`;

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => client.fetch(postsQuery),
  });
};

export const useFeaturedPosts = () => {
  return useQuery({
    queryKey: ["featured-posts"],
    queryFn: () => client.fetch(FEATURED_POSTS_QUERY),
  });
};

export const usePostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => client.fetch(POST_BY_SLUG_QUERY, { slug }),
    enabled: !!slug,
  });
};
