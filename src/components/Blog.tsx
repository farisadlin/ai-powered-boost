import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePosts, useFeaturedPosts, type Post } from "@/hooks/usePosts";
import { format } from "date-fns";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { data: posts = [], isLoading } = usePosts();
  const { data: featuredPosts = [] } = useFeaturedPosts();

  // Get unique categories from posts
  const categories = posts.reduce((acc: string[], post: Post) => {
    post.categories?.forEach((cat) => {
      if (!acc.includes(cat.title)) {
        acc.push(cat.title);
      }
    });
    return acc;
  }, []);

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post: Post) =>
          post.categories?.some((cat) => cat.title === selectedCategory)
        );

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      green: "bg-green-100 text-green-800 hover:bg-green-200",
      orange: "bg-orange-100 text-orange-800 hover:bg-orange-200",
      red: "bg-red-100 text-red-800 hover:bg-red-200",
      purple: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      pink: "bg-pink-100 text-pink-800 hover:bg-pink-200",
      yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      gray: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    };
    return colorMap[color] || colorMap.blue;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 p-10">
      <div className="mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Ahead with AI Marketing Insights
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Get the latest AI marketing strategies, automation tips, and
              industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 -mx-4 sm:-mx-6 lg:-mx-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post: Post) => (
                <Link
                  key={post._id}
                  to={`/blog/${post.slug.current}`}
                  className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50"
                >
                  {post.mainImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      {post.categories?.slice(0, 2).map((category, index) => (
                        <Badge
                          key={index}
                          className={getCategoryColor(category.color)}
                        >
                          {category.title}
                        </Badge>
                      ))}
                      <Badge className="bg-orange-100 text-orange-800">
                        Featured
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author.name}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {format(new Date(post.publishedAt), "MMM dd, yyyy")}
                          </span>
                        </div>
                        {post.estimatedReadingTime && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.estimatedReadingTime} min read</span>
                          </div>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full"
            >
              All Posts
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: Post) => (
            <Link
              key={post._id}
              to={`/blog/${post.slug.current}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {post.mainImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.categories?.slice(0, 2).map((category, index) => (
                    <Badge
                      key={index}
                      className={getCategoryColor(category.color)}
                    >
                      {category.title}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(post.publishedAt), "MMM dd")}</span>
                  </div>
                  {post.estimatedReadingTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.estimatedReadingTime} min</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
