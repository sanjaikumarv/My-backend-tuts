import { formatResponsive } from "../../lib/formateResponsive";
import Comments from "../../models/comments/comments.model";

export function getComments(req, res, next) {
  const postId = req.query.postId;
  const condition = {};
  if (postId) {
    condition.postId = postId;
  }
  Comments.find(condition)
    .then((comments) => {
      formatResponsive(res, comments, 200);
    })
    .catch(next);
}
