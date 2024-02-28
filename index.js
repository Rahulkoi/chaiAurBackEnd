require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "Rahulkoi",
    "id": 92011503,
    "node_id": "U_kgDOBXv77w",
    "avatar_url": "https://avatars.githubusercontent.com/u/92011503?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rahulkoi",
    "html_url": "https://github.com/Rahulkoi",
    "followers_url": "https://api.github.com/users/Rahulkoi/followers",
    "following_url": "https://api.github.com/users/Rahulkoi/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rahulkoi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rahulkoi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rahulkoi/subscriptions",
    "organizations_url": "https://api.github.com/users/Rahulkoi/orgs",
    "repos_url": "https://api.github.com/users/Rahulkoi/repos",
    "events_url": "https://api.github.com/users/Rahulkoi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rahulkoi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rahul",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2021-10-06T05:54:03Z",
    "updated_at": "2024-01-06T08:16:21Z"
    }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/github", (req, res) => {
    res.json(githubData);
})

app.listen(process.env, () => {
  console.log(`Example app listening on port ${port}`)
})