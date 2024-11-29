import { allPosts } from "content-collections";
import Link from "next/link";
import Image from "next/image";

export default async function PostsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl font-bold text-primary mb-12 text-center">
        Latest Articles
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allPosts.map((post: any) => (
          <Link 
            href={`/posts/${post.slug}`}
            key={post.slug}
            className="group perspective-1000"
          >
            <article className="bg-gradient-to-br from-dark-black/40 to-dark-black/20 backdrop-blur rounded-xl overflow-hidden border border-gray-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-black/60 to-transparent" />
              </div>
              <div className="p-8">
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-primary/90 transition-colors">
                  {post.title}
                </h2>
                <p className="text-secondary text-sm mb-6 line-clamp-3">
                  {post.summary}
                </p>
                <time className="text-xs text-secondary/80 font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
