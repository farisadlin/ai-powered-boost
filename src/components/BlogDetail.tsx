import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePostBySlug } from "@/hooks/usePosts";
import { format } from "date-fns";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = usePostBySlug(slug || "");

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      orange: "bg-orange-100 text-orange-800",
      red: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800",
      pink: "bg-pink-100 text-pink-800",
      yellow: "bg-yellow-100 text-yellow-800",
      gray: "bg-gray-100 text-gray-800",
    };
    return colorMap[color] || colorMap.blue;
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title || "";
  const shareDescription = post?.excerpt || "";
  const shareImage = post?.mainImage?.asset?.url || "";

  // Update meta tags for better sharing
  useEffect(() => {
    if (post) {
      // Update document title
      document.title = `${post.title} | AutoGrowth Blog`;

      // Update or create meta tags
      const updateMetaTag = (property: string, content: string) => {
        let meta = document.querySelector(
          `meta[property="${property}"]`
        ) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("property", property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      const updateMetaName = (name: string, content: string) => {
        let meta = document.querySelector(
          `meta[name="${name}"]`
        ) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement("meta");
          meta.setAttribute("name", name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      // Open Graph tags for better sharing
      updateMetaTag("og:title", post.title);
      updateMetaTag("og:description", shareDescription);
      updateMetaTag("og:image", shareImage);
      updateMetaTag("og:url", shareUrl);
      updateMetaTag("og:type", "article");

      // Twitter Card tags
      updateMetaName("twitter:card", "summary_large_image");
      updateMetaName("twitter:title", post.title);
      updateMetaName("twitter:description", shareDescription);
      updateMetaName("twitter:image", shareImage);

      // WhatsApp specific meta tags
      updateMetaName("description", shareDescription);
    }
  }, [post, shareUrl, shareDescription, shareImage]);

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareTitle
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(
          `${shareTitle} - ${shareUrl}`
        )}`;
        break;
    }
    if (url) {
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  const portableTextComponents: PortableTextComponents = {
    types: {
      image: ({ value }) => (
        <div className="my-8">
          <img
            src={value.asset.url}
            alt={value.alt || ""}
            className="w-full rounded-lg shadow-lg"
          />
          {value.alt && (
            <p className="text-sm text-gray-500 text-center mt-2">
              {value.alt}
            </p>
          )}
        </div>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-12">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          {children}
        </h4>
      ),
      normal: ({ children }) => (
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-xl text-gray-600">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700">
          {children}
        </ul>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ children, value }) => (
        <a
          href={value?.href}
          className="text-orange-600 hover:text-orange-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            {post.categories?.map((category, index) => (
              <Badge
                key={index}
                className={`${getCategoryColor(category.color)} mr-2`}
              >
                {category.title}
              </Badge>
            ))}
            {post.featured && (
              <Badge className="bg-orange-100 text-orange-800">Featured</Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    src={post.author.image.asset.url}
                    alt={post.author.image.alt || post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium text-gray-900">
                      {post.author.name}
                    </span>
                  </div>
                  {post.author.role && (
                    <span className="text-sm text-gray-500">
                      {post.author.role}
                    </span>
                  )}
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.publishedAt), "MMMM dd, yyyy")}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Share this post
            </h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("twitter")}
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
                className="flex items-center gap-2"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("whatsapp")}
                className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        {post.author && post.author.bio && (
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.image.alt || post.author.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {post.author.name}
                </h4>
                {post.author.role && (
                  <p className="text-orange-600 text-sm mb-3">
                    {post.author.role}
                  </p>
                )}
                <div className="prose prose-sm text-gray-600">
                  <PortableText value={post.author.bio} />
                </div>
                {post.author.socialLinks && (
                  <div className="flex items-center gap-3 mt-4">
                    {post.author.socialLinks.twitter && (
                      <a
                        href={post.author.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {post.author.socialLinks.linkedin && (
                      <a
                        href={post.author.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {post.author.socialLinks.website && (
                      <a
                        href={post.author.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-orange-600"
                      >
                        <Share2 className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
