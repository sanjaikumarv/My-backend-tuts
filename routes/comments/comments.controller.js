import { formatResponsive } from "../../lib/formateResponsive";
import Comments from "../../models/comments/comments.model";

export function getComments(req, res, next) {
  Comments.find({})
    .then((comments) => {
      formatResponsive(res, comments, 200);
    })
    .catch(next);
}
