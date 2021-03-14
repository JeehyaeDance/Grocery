## Scripts

`npm run start:watch`
> Run the application and watch for any changes to any files.

`npm run setup:force`
> Unfinished: Should be run via `npm run setup:force` for now. The goal of this script is to drop all tables, and recreate all tables. After doing this we will want to run all of the migrations located in the `db/migrations` folder.

`npm run generate-migration <[create|update|...]-[<table_name>|<column_name>]-[table|column]`
> Unfinished: Should generate a migration in the `db/migrations` folder. Usage: `npm run generate-migration -- <migration-name>`. Tip: Make sure you create and pass a callback method to the generated code (see previous examples).