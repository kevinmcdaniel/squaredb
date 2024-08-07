#!/bin/bash
set -e

# Create the database and assign an owner
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE "$DATABASENAME";
    GRANT ALL PRIVILEGES ON DATABASE "$DATABASENAME" TO "$POSTGRES_USER";
EOSQL
