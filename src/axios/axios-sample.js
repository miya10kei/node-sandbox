import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

/* GET */
client.get('/events')
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

/* GET */
client.get('/events/1')
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

client.post('events', {
  "event" : {
    "event_type": "Symposium",
    "event_date": "2019-01-01",
    "title": "A Symposium",
    "speaker": "Albert Einstein",
    "host": "Marie Curie",
    "published": true
  }})
  .then((res => {
    console.log(res.data)
  }))
  .catch((err) => {
    console.log(err)
  })
