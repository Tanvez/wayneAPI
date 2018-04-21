const router = require('express').Router()
const key = require('./apiKey')
module.exports = router

// code from postman
function possibleVillian(img) {
  const request = require("request")
  console.log(img.toString())
  const options = {
    method: 'POST',
    url: 'https://www.headlightlabs.com/api/gcpd_lookup',
    headers:
    {
      'Postman-Token': '51ea4ad6-d5eb-47a9-a9b9-4b6d4f39c094',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
    },
    formData: { api_key: key, image: img } 
  }
  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    console.log(body)
  })
}

// Using form data
router.post('/wayneApi', (req, res) => {
  possibleVillian(req.body)
  res.end('success!')
})
