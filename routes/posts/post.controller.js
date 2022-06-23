import { formatResponsive } from "../../lib/formateResponsive";
import Posts from "../../models/posts";

function getPosts(req, res, next) {
  const limit = Number(req.query.limit) || 0;
  console.log("limit", limit);
  Posts.find({})
    .limit(limit)
    .then((posts) => {
      formatResponsive(res, posts, 200);
    })
    .catch(next);
}

function createPosts(req, res, next) {
  const { userId, title, body } = req.body;
  Posts.create({
    userId: userId,
    title,
    body,
  })
    .then((post) => {
      res.json(post);
    })
    .catch(next);
}

export { getPosts, createPosts };
