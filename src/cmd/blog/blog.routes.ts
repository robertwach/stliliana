import { Router } from 'express';

import * as Controller from './blog.controller';


const router = Router();

// router.post('/', Controller.createArticle);
// router.put('/update-published/:id', Controller.configurePublished);
router.get('/', Controller.allArticles);
router.get('/details/:id', Controller.articleDetails);
// router.post('/update/:id', Controller.updateArticle);



export default router;
