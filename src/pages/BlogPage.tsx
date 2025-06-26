import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;