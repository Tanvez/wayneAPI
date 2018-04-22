const router = require('express').Router()
const key = require('./apiKey')
module.exports = router

// code from postman
function possibleVillian(img, callBack) {
  const k = Object.keys(img)
  const request = require("request");
  const options = {
    method: 'POST',
    url: 'https://www.headlightlabs.com/api/gcpd_lookup',
    headers:
    {
      'Postman-Token': 'a9ce8bb8-a58e-4376-a13c-6aef4386b9bb',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded' },
    form:
      {
        api_key: 'Y1FaGRxsveHH41lVeklWsA',
        image_contents: k[0]
      }
  }

request(options, function (error, response, body) {
  if (error) throw new Error(error)
  //console.log('****body', body)
  callBack(body)
 
  })
}


// Using form data
router.post('/wayneApi', (req, res) => {
  possibleVillian(req.body, (data) => { res.json(data) })
  //res.end('success!')
})
