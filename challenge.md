# Challenge

You have a json file 

```json
[
  { 
    "id": 1,
    "title": "Hello",
    "description": "World"
  },
  { 
    "id": 2,
    "title": "Hello 2",
    "description": "World 2"
  },
  { 
    "id": 3,
    "title": "Hello 3",
    "description": "World 3"
  }
]
```

Create app using postgres, hasura, and nextjs | sveltekit

Postgres must contain only 1 table `long_tails` with fields `tail` as string and `json_id` as number, with following data

```csv
best-hello-ever, 1
best-hello-world-ever, 2
best-world-ever, 3
```

(_`json_id` is 1-1 relation to json above_)

I want accessing app at `localhost:3000/{tail}` i.e. (`localhost:3000/best-hello-ever` etc) 
to see the `title` and `description` on the screen.

- I want to see changes on my screen if I edited json and reload the page.
- App above must use only 1 fetch to hasura.
- App above must be reproducible on linux and mac machines.
- App must have good dev experience (i.e. all that modern hot reloads etc)

## Output we need

github repository with app above, and instructions how we can setup/work with app on local env.

## Bonus point

If you would depoy it anywhere and provide a link to app (deploy must be documented/configured too)




