import { Router } from 'express';
import multer from 'multer';
import multerPostConfig from './config/multerPost';
import multerProfileConfig from './config/multerProfile';
import CategoryController from './controllers/CategoryController';
import CategoryPostController from './controllers/CategoryPostController';
import ExampleController from './controllers/ExampleController';
import MomentController from './controllers/MomentController';
import PostController from './controllers/PostController';
import PostVisibilityController from './controllers/PostVisibilityController';
import UserController from './controllers/UserController';

import UserAuthController from './controllers/UserAuthController';
import UserAuthMiddleware from './middlewares/UserAuthMiddleware'

const routes = new Router();
const uploadPostPicture = multer(multerPostConfig);
const uploadProfilePicture = multer(multerProfileConfig);


// Authorize user to get Auth Code.
routes.get('/auth', UserAuthController.auth);
// get Auth code from user and return the url scheme to open app 
routes.get('/oauth2callback', UserAuthController.oauth2callback);

// get user details (required: user_id, token)
routes.post('/users', UserAuthMiddleware, UserController.show);

routes.get('/', ExampleController.index);
routes.post('/create-post', PostController.store);
routes.post('/create-moment', uploadPostPicture.array('photos', 6), MomentController.store);
routes.post('/create-category', CategoryController.store);
// routes.post('/create-user', UserController.store);
routes.get('/get-all-categories', CategoryController.index);
routes.get('/get-all-moments-from-post', MomentController.index);
routes.put('/update-post-visibility', PostVisibilityController.update);
routes.get('/get-posts-by-category', PostController.index);
routes.get('/get-category-and-posts', CategoryPostController.show);
routes.get('/get-categories-with-posts', CategoryPostController.index);

export default routes;
