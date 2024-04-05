import express from 'express'

const app = express()

app.get('', (req, res, next) => res.json('Xin chào'))

app.listen(8000, () => {
      console.log('comming')
})
