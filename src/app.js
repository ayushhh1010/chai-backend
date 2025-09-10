import { express } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //Lets your app read JSON data sent in requests.
app.use(express.urlencoded({extended: true, limit: "16kb"})) //Lets your app read form data
app.use(express.static("public")) //Lets your app show static files (like images, CSS, JS) from the public folder.
app.use(cookieParser()) //Lets your app read cookies from the browser.

export {app}