import mongoose, { close } from "../database";
import { importComments } from "./seedcomments";
import { importPhotos } from "./seedphotos";

async function dropseeds(CNames) {
  for (const name of CNames) {
    await mongoose.connection.dropCollection(name);
  }
}

try {
  if (process.argv[2] === "-d") {
    await dropseeds(["comments", "photos"]);
  } else {
    await importComments();
    await importPhotos();
  }
} finally {
  close();
}
