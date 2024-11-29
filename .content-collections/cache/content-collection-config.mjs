// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "*.mdx",
  schema: (z) => ({
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
    avatar: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
