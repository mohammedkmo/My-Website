import { allPosts } from "content-collections";
import { formatDate } from "@/utils/helpers";
import Link from "next/link";
import Image from "next/image";
import { MDXContent } from "@content-collections/mdx/react";
import CodeBlock from "@/components/CodeBlock";
import { DM_Serif_Text } from "next/font/google";
import { Metadata } from "next";
import { promises } from "dns";

const dmSerifText = DM_Serif_Text({
    subsets: ['latin'],
    variable: '--font-dm-serif-text',
    weight: ['400'],
});

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = (await params).slug;
    const post = await allPosts.find((post: any) => post.slug === slug);
    return {
        title: post?.title,
        description: post?.summary,
        keywords: post?.tags,
        authors: { name: post?.author, url: post?.authorUrl },
        openGraph: {
            title: post?.title,
            description: post?.summary,
            images: [{
                url: post?.image,
                width: 1200,
                height: 630,
                alt: post?.title
            }],
            url: `https://mohammedk.me/posts/${post?.slug}`,
            type: 'article',
            siteName: 'Mohammed K',
        },
        twitter: {
            card: 'summary_large_image',
            title: post?.title,
            description: post?.summary,
            images: [post?.image],
            creator: '@mohammedk_me'
        },
        alternates: {
            canonical: `https://mohammedk.me/posts/${post?.slug}`
        },
        robots: {
            index: true,
            follow: true
        }
    };
}

export default async function PostPage({ params }: PageProps) {
    const slug = (await params).slug;
    const post = await allPosts.find((post: any) => post.slug === slug);

    const readingTime = Math.ceil(post?.mdx.split(' ').length / 250);

    return (
        <main className="w-full">
            <div className="container py-8">
                <h1 className={`text-4xl md:text-8xl font-bold ${dmSerifText.className} text-primary`}>{post?.title}</h1>

              
            
                  
              

                <div className="flex items-center justify-between w-full mt-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image src={post?.avatar} alt={post?.author} width={1000} height={1000} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-sm text-white font-bold">{post!.author}</p>
                            <p className="text-xs text-gray-400">{post!.jobTitle}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-xs text-gray-400">{formatDate(post!.date)}</p>
                        <p className="text-xs text-gray-400">{readingTime} min read</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 mt-8">
                    <div className="w-full h-96 rounded-lg overflow-hidden">
                        <Image src={post!.image} alt={post!.title} width={1000} height={1000} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-gray-400">Image by {post?.imageBy}</p>
                </div>
                <div className="prose prose-pre:p-0 prose-pre:rounded-lg prose-pre:py-2 prose-pre:px-3 prose-img:rounded-lg max-w-none mt-8">

                <h2 className={`text-sm mb-8 font-mono`}>
                        {post?.summary}
                    </h2>
                    <MDXContent code={post!.mdx} components={{
                        code: ({ children, className, ...props }: any) => (
                            <CodeBlock children={children as string} className={className} {...props} />
                        )
                    }} />
                </div>


                <div className="flex items-center gap-2 mt-8">
                    <p className="text-sm text-primary">Category:</p>
                    <Link className="text-xs bg-secondary text-black px-2 py-1 rounded-md font-mono cursor-pointer hover:bg-primary/80 transition-all duration-300" href={`/posts/category/${post?.category}`}>
                        {post?.category}
                    </Link>
                </div>


                <div className="flex items-center gap-2 mt-4">
                    <p className="text-sm text-primary">Tags:</p>
                    {
                        post?.tags.map((tag: string) => (
                            <Link href={`/posts/tag/${tag}`} key={tag} className="text-xs px-2 py-1 bg-secondary text-black rounded-md font-mono cursor-pointer hover:bg-primary/80 transition-all duration-300">{tag}</Link>
                        ))
                    }
                </div>

 
            </div>



            <div className="mt-8 bg-mesh border-t border-gray-800 py-8">
                <div className="container">
                    <h2 className="text-4xl font-bold font-serif text-primary">More posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {
                            allPosts.filter((p: any) => p.slug !== post?.slug).slice(0, 3).map((post: any) => (
                                <Link href={`/posts/${post.slug}`} key={post.slug} className="flex flex-col gap-2 group">
                                    <div className="w-full h-36 rounded-lg overflow-hidden">
                                        <Image src={post.image} alt={post.title} width={1000} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                                    </div>
                                    <h1 className={`text-lg font-bold text-secondary group-hover:underline group-hover:text-primary transition-all duration-300 ${dmSerifText.className}`}>{post.title}</h1>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
