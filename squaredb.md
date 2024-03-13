### commmands I run all the time....

# to run locally...
a. postgres docker container must be running.
b. yarn rw dev           # runs development server locally
c. yarn rw prisma studio # database viewer/editor (direct to db)


# general
yarn = package manager!
redwood (rw) package
generate (g) generate





# Front end / web

* create a page - adds to routing automatically
yarn rw g page <name>

* create a layout  
yarn rw g layout <name>

# back end / api

* create a database migration after updating api/db/schema.prisma
yarn rw prisma migrate dev

* create api scaffold for a table
yarn rw g scaffold <tableName>