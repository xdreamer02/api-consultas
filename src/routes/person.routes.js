import { Router } from 'express'
import { getPeoplexDni,getPeoples,getPeoplexLast} from '../controller/person.controller.js';
const router = Router()


router.get('/personas/', getPeoples)
router.get('/personass/:dni', getPeoplexDni)
//router.get('/personass/:pat/:mat', getPersonByLastName)
//router.post('people/',postPeople) //only demopersonas




export default router