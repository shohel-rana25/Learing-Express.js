import  express  from 'express';
const router=express.Router();

import { createmethod , getOnemethod, getAllmethod, updatemethod, deletemethod} from '../controllers/controller.js';

router.get('/api/', getAllmethod);
router.get('/api/:id', getOnemethod)
router.post('/api/', createmethod);
router.put('/api/:id', updatemethod)
router.delete('/api/:id', deletemethod);


export default router;