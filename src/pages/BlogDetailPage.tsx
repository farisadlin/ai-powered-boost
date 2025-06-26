import Header from "@/components/Header";
import BlogDetail from "@/components/BlogDetail";
import Footer from "@/components/Footer";

const BlogDetailPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <BlogDetail />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;