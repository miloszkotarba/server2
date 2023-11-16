const PORT = 8000

const express = require("express")
const app = express()

const morgan = require("morgan")

app.use(morgan(":method :url :status :remote-addr"))

app.get("/data", (req, res) => {
  res.json({
    Status: 200,
  })
})

app.listen(PORT, () => console.log("Server listening on PORT: " + PORT))
