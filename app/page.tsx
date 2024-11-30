import Link from "next/link";
import { allPosts } from "content-collections";
import { formatDate } from "@/utils/helpers";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-serif-text',
  weight: '400',
});

export default function Home() {
  return (
    <main className="w-full">

      {/* hero section */}
      <section className="flex items-center justify-between w-full py-16 container">
        <div className="flex flex-col items-start justify-center">
          <h1 className={`text-6xl md:text-8xl mb-8 ${dmSerifText.className} font-bold text-primary`}>Hello, I'm Mohammed</h1>
          <p className="text-secondary  text-sm">A full stack software developer with over 7 years of experience creating amazing software applications! With a wide range of skills in both front-end and back-end development.</p>
        </div>
      </section>

      {/* about me */}
      <section className=" w-full py-16 space-y-8 container">
        <h1 className={`text-6xl md:text-8xl font-bold mb-8 ${dmSerifText.className} text-primary`}>About Me</h1>
        <p className="text-secondary  text-sm">Self-driven and detail-oriented Software Engineer with substantial experience in app development and managing entire testing lifecycle and configuration process for customized software solutions. Ability to function in team-based collaborations and demonstrate outstanding attention to detail in partnering with developers, clients, QA and support engineers throughout the project lifecycle. Skilled in advanced software development methodologies, innovative tools, and agile processes contributing to the design and launch of user-friendly software, web and mobile applications. Valued for driving quality and consistency as well as meeting all time-sensitive development objectives. Multilingual professional with outstanding communication skills, capable of building sustainable relationships with high-end industrial clients.</p>
      </section>

      {/* posts */}
      <section className="py-16 container space-y-8">
        <div className="flex flex-col items-start justify-start">
          <h1 className={`text-6xl md:text-8xl font-bold ${dmSerifText.className} text-primary`}>Posts</h1>
          <p className="text-secondary">Here are some of my posts</p>
        </div>
        <div className="grid grid-cols-1 space-y-8">
          {allPosts.map((post: any) => (
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
      </section>

    </main>
  );
}
