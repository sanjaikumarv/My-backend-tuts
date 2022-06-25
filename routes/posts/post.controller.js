import { formatResponsive } from "../../lib/formateResponsive";
import Posts from "../../models/posts";
import Comments from "../../models/comments/comments.model";

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

function getPost(req, res, next) {
  const recordId = req.params.id;
  Posts.findOne({ id: recordId })

    .then((post) => {
      if (!post) {
        throw new Error(`no post found in the id ${recordId}`);
      }
      res.json(post);
    })
    .catch(next);
}

function getPostComments(req, res, next) {
  const postId = req.params.id;
  Comments.find({ postId })
    .then((comments) => {
      formatResponsive(res, comments, 200);
    })
    .catch(next);
}

function createPost(req, res, next) {
  const { userId, title, body } = req.body;
  Posts.create({
    userId: userId,
    title: title,
    body: body,
  })
    .then((post) => {
      res.json(post);
    })
    .catch(next);
}

async function updatePost(req, res, next) {
  const recordId = req.params.id;
  if (!recordId) throw new Error("Posts id not passed in url");

  try {
    const record = await Posts.findOne({ id: recordId });
    if (!record) {
      throw new Error(`Posts not found in the provided id ${recordId}`);
    }
    const { title, body } = req.body;
    record.title = title;
    record.body = body;
    const updatedRecord = await record.save();
    res.json(updatedRecord);
  } catch (err) {
    next(err);
  }
}

async function deletePost(req, res, next) {
  const recordId = req.params.id;

  try {
    await Posts.deleteOne({ id: recordId });
    res.json({
      message: "Record deleted",
    });
  } catch (err) {
    next(err);
  }
}
export {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
  getPostComments,
};
