import { Router } from 'express';
import { getAllMurids, createMurid, updateMurid, deleteMurid } from '../controllers/muridControllers.js';

const router = Router();

router.get('/', getAllMurids);
router.post('/', createMurid);
router.put('/:id', updateMurid);
router.delete('/:id', deleteMurid);

export default router;
