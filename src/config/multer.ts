import multer from 'multer';
import { resolve } from 'path';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads', folder),
        filename: (req, file, callback) => {
          return callback(null, `${Date.now()}-${file.originalname}`);
        }
      })
    };
  }
};
