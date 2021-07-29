# how to run
* yarn install

# choose where you will deploy it

If you decide to use a local instance, there is a docker-compose file which you can spin up by doing `docker-compose up -d`!

Now if you decide to use a `hasura.cloud` instance, lets change some parameters on the metadata:

1. Go to: metadata/databases/databases.yaml
2. replace 

```
connection_info:
      database_url: 
        from_env: HASURA_GRAPHQL_DATABASE_URL
```

with 
```
	connection_info: YOUR_GRAPHQL_DATABASE_URL_CONNECTION
```

3. now let`s setup the env (ill assume local env with docker)
> yarn hasura metadata apply --endpoint http://localhost:8080
> yarn hasura migration apply --endpoint http://localhost:8080
> yarn hasura seed apply --endpoint http://localhost:8080

4. `yarn dev`

5. Go to localhost:3000/<any slug> and tadam!