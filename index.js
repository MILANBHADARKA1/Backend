require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata = {
    "login": "MILANBHADARKA",
    "id": 139969641,
    "node_id": "U_kgDOCFfEaQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/139969641?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MILANBHADARKA",
    "html_url": "https://github.com/MILANBHADARKA",
    "followers_url": "https://api.github.com/users/MILANBHADARKA/followers",
    "following_url": "https://api.github.com/users/MILANBHADARKA/following{/other_user}",
    "gists_url": "https://api.github.com/users/MILANBHADARKA/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MILANBHADARKA/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MILANBHADARKA/subscriptions",
    "organizations_url": "https://api.github.com/users/MILANBHADARKA/orgs",
    "repos_url": "https://api.github.com/users/MILANBHADARKA/repos",
    "events_url": "https://api.github.com/users/MILANBHADARKA/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MILANBHADARKA/received_events",
    "type": "User",
    "site_admin": false,
    "name": "MILAN BHADARKA",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Hello! I am Milan Bhadarka.",
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 10,
    "following": 10,
    "created_at": "2023-07-19T10:36:15Z",
    "updated_at": "2024-05-23T05:57:07Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Milan Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1> Login Page </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Chai aur Code </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})