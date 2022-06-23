import { formatResponsive } from "../../lib/formateResponsive";
import Posts from "../../models/posts";

function getPosts(req, res, next) {
  Posts.find({})
    .then((posts) => {
      formatResponsive(res, posts, 200);
    })
    .catch(next);
}

export default getPosts;
