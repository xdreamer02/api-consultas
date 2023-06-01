import { Router } from 'express'
import { getPeoplexDni } from '../controller/person.controller.js';
const router = Router()

router.get('/personass/:dni', getPeoplexDni)
//router.get('/personass/:pat/:mat', getPersonByLastName)



export default router