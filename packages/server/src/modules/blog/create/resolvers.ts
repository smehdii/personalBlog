import { MutationResolvers } from "../../../types";
import { Blog } from "../../../entity/Blog";
import { isAuthenticated } from "../../../middleware";

export const resolvers: MutationResolvers.Resolvers = {
  createBlog: async (
    _,
    { input: { content, pictureUrl, techTags, title } },
    { req }
  ) => {
    // req.session!.userId = "2afdbfc1-b26b-4baa-b58c-fdc03c4d3f76";
    isAuthenticated(req);
    const blog = await Blog.create({
      title,
      content,
      pictureUrl,
      techTags,
      author: req.session!.userId
    }).save();
    return {
      errors: [],
      blog
    };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
