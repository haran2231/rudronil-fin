import { useEffect, useState } from "react";
import { CalendarDays, Globe2, ArrowLeft, ArrowRight } from "lucide-react";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const API_KEY = "YOUR_GNEWS_API_KEY";

export default function BlogPage() {
  const [category, setCategory] = useState("world");
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async (selectedCategory) => {
    try {
      setLoading(true);
      setError("");

const url = `https://corsproxy.io/?https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&max=9&apikey=adb7d472597b31c46914ec9123e324b2`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.[0] || "Failed to fetch news");
      }

      setArticles(data.articles || []);
      setSelectedArticle(null);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="min-h-screen bg-[#f6f7fc] text-[#1d275f]">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-8">
          <p className="text-sm text-white/80">
            Home <span className="mx-2">›</span> Blog
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Global News & Market Updates
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-blue-100">
            Stay informed with live international headlines, financial
            developments, and important global events.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                category === item
                  ? "bg-blue-700 text-white"
                  : "border border-gray-200 bg-white text-[#1d275f] hover:bg-blue-50"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Single article view */}
      {selectedArticle ? (
        <section className="mx-auto max-w-5xl px-6 pb-16 md:px-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 inline-flex items-center gap-2 font-semibold text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </button>

          <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(20,37,63,0.08)]">
            <img
              src={selectedArticle.image || "https://via.placeholder.com/1200x500"}
              alt={selectedArticle.title}
              className="h-[320px] w-full object-cover md:h-[460px]"
            />

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4" />
                  {selectedArticle.source?.name || "Global Source"}
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {selectedArticle.publishedAt
                    ? new Date(selectedArticle.publishedAt).toLocaleString()
                    : "Latest"}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1d275f] md:text-4xl">
                {selectedArticle.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {selectedArticle.description || "No description available."}
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                {selectedArticle.content || "Open the original article to read the full story."}
              </p>

              <a
                href={selectedArticle.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
              >
                Read Original Article
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
          {loading && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[420px] animate-pulse rounded-2xl border border-gray-100 bg-white"
                />
              ))}
            </div>
          )}

          {error && !loading && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(20,37,63,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(20,37,63,0.12)]"
                >
                  <img
                    src={article.image || "https://via.placeholder.com/600x320"}
                    alt={article.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <Globe2 className="h-4 w-4" />
                        {article.source?.name || "Global Source"}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {article.publishedAt
                          ? new Date(article.publishedAt).toLocaleDateString()
                          : "Latest"}
                      </span>
                    </div>

                    <h2 className="mt-4 line-clamp-2 text-2xl font-semibold leading-snug text-[#1d275f]">
                      {article.title}
                    </h2>

                    <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                      {article.description || "Read the latest international update."}
                    </p>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}