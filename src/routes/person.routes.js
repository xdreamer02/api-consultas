import { Router } from 'express'
import { getPeoplexDni, getPeoplexName } from '../controller/person.controller.js';
const router = Router()

router.get('/personass/:dni', getPeoplexDni)



export default router