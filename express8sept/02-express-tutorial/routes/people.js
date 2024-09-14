const express=require('express')
const router = express.Router()
let {people} = require('../data')
const{
    createPerson,
    deletePerson,
    updatePerson,
    createPersonPostman,
    getPeople
}= require('../controllers/people')

// router.get('/',getPeople)
// router.post('/',createPerson)
// router.post('/postman',createPersonPostman)
// router.put('/:id',updatePerson)
// router.delete('/api/people/:id',deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports=router