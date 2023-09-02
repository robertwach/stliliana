import { Router } from 'express';
import * as Controller from './seo.controller';

const router = Router();

router.post('/', Controller.createPage);
router.put('/update/:id', Controller.updatePage);
router.get('/', Controller.pages);
router.get('/details/:id', Controller.pageDetail);



export default router;