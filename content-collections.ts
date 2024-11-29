import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "*.mdx",
  schema: (z: any) => ({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    image: z.string(),
    imageBy: z.string(),
    date: z.string(),
    author: z.string(),
    jobTitle: z.string(),
    avatar: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});
 
export default defineConfig({
  collections: [posts],
});