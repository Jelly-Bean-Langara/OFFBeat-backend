import { Router } from 'express';
import multer from 'multer';
import multerPostConfig from './config/multerPost';
import multerProfileConfig from './config/multerProfile';
import CategoryController from './controllers/CategoryController';
import CategoryPostController from './controllers/CategoryPostController';
import MomentController from './controllers/MomentController';
import PostController from './controllers/PostController';
import PostCoverController from './controllers/PostCoverController';
import PostVisibilityController from './controllers/PostVisibilityController';
import UserController from './controllers/UserController';
import MomentPhotosController from './controllers/MomentPhotosController';
import ExploreController from './controllers/ExploreController';
import SearchController from './controllers/SearchController';

import UserAuthController from './controllers/UserAuthController';
import UserAuthMiddleware from './middlewares/UserAuthMiddleware';

const routes = new Router();
const uploadPostPicture = multer(multerPostConfig);
const uploadProfilePicture = multer(multerProfileConfig);

// Authorize user to get Auth Code.
routes.post('/auth', UserAuthController.auth);
// get Auth code from user and return the url scheme to open app
routes.get('/oauth2callback', UserAuthController.oauth2callback);

// get user details (required: user_id, token)
routes.post('/users', UserAuthMiddleware, UserController.show);
routes.get('/', (req, res) => { res.json({ message: 'hey' }); });
routes.post('/create-post', PostController.store);
routes.post('/create-moment', uploadPostPicture.array('photos', 8), MomentController.store);
routes.post('/create-category', CategoryController.store);
// routes.post('/create-user', UserController.store);
routes.get('/get-all-categories', CategoryController.index);
routes.get('/get-all-moments-from-post', MomentController.index);
routes.put('/update-post-visibility', PostVisibilityController.update);
routes.get('/get-posts-by-category', PostController.index);
routes.get('/get-category-and-posts', CategoryPostController.show);
routes.get('/get-categories-with-posts', CategoryPostController.index);
routes.get('/get-post-cover', PostCoverController.show);
routes.get('/get-post-by-id', PostController.show);
routes.get('/get-moment-info', MomentController.show);
routes.get('/get-moment-photos', MomentPhotosController.show);
routes.put('/edit-moment', uploadPostPicture.array('photos', 8), MomentController.update);
routes.delete('/delete-moment-from-post', MomentController.delete);
routes.get('/get-explore', ExploreController.index);
routes.get('/get-search', SearchController.index);

export default routes;
