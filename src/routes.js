import { Router } from 'express';
import multer from 'multer';
import multerPostConfig from './config/multerPost';
import multerProfileConfig from './config/multerProfile';
import CategoryController from './controllers/CategoryController';
import ExampleController from './controllers/ExampleController';
import MomentController from './controllers/MomentController';
import PostController from './controllers/PostController';
import UserController from './controllers/UserController';

const routes = new Router();
const uploadPostPicture = multer(multerPostConfig);
const uploadProfilePicture = multer(multerProfileConfig);

routes.get('/', ExampleController.index);
routes.post('/create-post', PostController.store);
routes.post('/create-moment', uploadPostPicture.array('photos', 6), MomentController.store);
routes.post('/create-category', CategoryController.store);
routes.post('/create-user', UserController.store);
routes.get('/get-all-categories', CategoryController.index);
routes.get('/get-all-moments-from-post', MomentController.index);

export default routes;
