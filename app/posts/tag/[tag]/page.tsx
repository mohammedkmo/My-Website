import { allPosts } from "content-collections";
import Link from "next/link";
import Image from "next/image";
import { DM_Serif_Text } from "next/font/google";
import { formatDate } from "@/utils/helpers";

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  variable: '--font-dm-serif-text',
  weight: '400',
});

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function PostsTagPage({ params }: PageProps) {
  const tag = (await params).tag;
  const posts = allPosts.filter((post: any) => post.tags.includes(tag));
  return (
    <main className="py-16 container space-y-8 min-h-[calc(100vh-10rem)]">
    <div className="flex flex-col items-start justify-start">
      <h1 className={`text-6xl md:text-8xl font-bold ${dmSerifText.className} text-primary`}>{tag}</h1>
      <p className="text-secondary">Here are some of my posts with the tag {tag}</p>
    </div>
    <div className="grid grid-cols-1 space-y-8">
      {posts.map((post: any) => (
        <div key={post._meta.path} className="group w-full">
          <Link href={`/posts/${post.slug}`}>
            <h1 className={`text-xl font-bold group-hover:text-white ${dmSerifText.className} text-primary`}>{post.title}</h1>
            <p className="text-secondary  text-sm group-hover:text-white mt-2">{post.summary.slice(0, 120)}...</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-secondary  text-sm group-hover:text-white">{formatDate(post.date)}</p>
              <p className="text-secondary  text-sm group-hover:text-white">{post.category}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </main>
  );
}
