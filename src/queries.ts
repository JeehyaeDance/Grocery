import { Pool } from "pg"

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false,
  },
})

db.on("error", (err) => {
  console.log(err)
})