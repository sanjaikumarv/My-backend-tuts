import Photos from "../models/photos/photos.model";
import { faker } from "@faker-js/faker";

async function importPhotos(req, res, next) {
  const five1000 = [...Array(5000).keys()];
  const payload = five1000.map((elem) => {
    return {
      albumId: faker.random.numeric(),
      id: elem + 1,
      title: faker.name.findName(),
      image: faker.image.abstract(),
      url: faker.lorem.word() + "@sample.com",
      thumbnailUrl: faker.lorem.words(12),
    };
  });
  await Photos.insertMany(payload);
}
export { importPhotos };
