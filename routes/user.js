import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('p hello world')
})
router.get('/detail', (req, res) => {
    const userList = [
        { username: 'Amy', age: 19 },
        { username: 'Vicky', age: 27 },
        { username: 'John', age: 35 },
        { username: 'Geremy', age: 22 },
    ]
    res.render('user', {
        'userList': userList,
        'show': true  
    })
})





export default router