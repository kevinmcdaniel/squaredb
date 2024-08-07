# EnableDB

## Setup

To setup the project : npm i
To run the project : npm run localdev
To runt the test cases : npm test

# Postgres Cluster
Any issues regarding clusters can generally be solved using:
Update apt: apt-get update
install cluster: apt-get install -y postgresql-15
Start cluster: pg_createcluster 15 main --start

# Postgres  
May need to start postgresql with: service postgresql start
To enter psql: psql -U username -d database

# PSQL 
First need to create a new user: CREATE ROLE username PASSWORD password
Grant new user permisions: GRANT ALL ON DATABASE Matrix TO nrs_c1
Check what tables you have: \dt
Check what premissions are granted: \dp
Location to save local instance : \\wsl.localhost\docker-desktop-data\data\docker\volumes\enabledb_postgres_db

# Prisma 
Run all prisma commands in the docker exec of the express container
Push all schemas to postgres from express container: npx prisma db push --schema src/model
No capital letters in the file name or model of a schema: use the naming scheme database_tablename
** Any changes made to any schemas require you to delete your docker images and then run a full rebuild: docker rmi postgres nodejs flagd
Once changes have been made, build your client using: npx prisma generate --schema ./src/model/
Create a migration with (you will need your postgres container runnning for this): npx prisma migrate dev --schema /app/src/model/
To push what you have in your migrate file to your database: npx prisma db push

# CRUD Rules
In order to create a record that has a foriegn key, the other record must exist in a different table: 
    If I want to create a group_link with a groupId of 1, then there must be a group in the group table with an id of 1
If the input is a file, like a csv, then it must be mounted in the nodejs container in order for the csv reader to see it,
    Make the path for to the file read from the container, not the local machine