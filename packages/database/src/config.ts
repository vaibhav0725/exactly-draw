import { Client } from "pg"

export const connectToDb = async ()=>{
    try {
        await new Client("postgresql://todo-db_owner:npg_MIGHCSe97Wba@ep-autumn-sea-a5ouydfc-pooler.us-east-2.aws.neon.tech/todo-db?sslmode=require")
            .connect()
        console.log("PG DB CONNECTED");
    } catch (error) {
        console.error(error)
        console.log("PG DB NOT CONNECTED")
        process.exit(1)
    }
}

