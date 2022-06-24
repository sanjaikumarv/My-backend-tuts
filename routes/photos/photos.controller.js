import { formatResponsive } from "../../lib/formateResponsive";
import Photos from "../../models/photos/photos.model";

export function getPhotos(req, res, next) {
  Photos.find({})
    .then((photos) => {
      formatResponsive(res, photos, 200);
    })
    .catch(next);
}
