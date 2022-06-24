import Comments from "../models/comments/comments.model";
import { faker } from "@faker-js/faker";

async function importComments(req, res, next) {
  const fivehundard = [...Array(500).keys()];
  const payload = fivehundard.map((elem) => {
    return {
      postId: faker.random.numeric(),
      id: elem + 1,
      name: faker.name.findName(),
      email: faker.lorem.word() + "@sample.com",
      body: faker.lorem.words(12),
    };
  });
  await Comments.insertMany(payload);
}
export { importComments };
