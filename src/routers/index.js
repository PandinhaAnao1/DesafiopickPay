import  Express  from "express";
import logistaRouters from './logistaRouter.js'
import comunRouter from './comunRouter.js'

const router = Express.Router();

router.use('/logista',logistaRouters);
router.use('/comun',comunRouter);

export default router;