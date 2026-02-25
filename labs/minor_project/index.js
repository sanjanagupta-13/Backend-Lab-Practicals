const express = require('express');
const routeUser = require('./routes/users.route');
const app = express();

app.use(express.json());
app.use("/users",routeUser);

app.listen(3000, (req,res) => {
  console.log('Server is running on port 3000');
}
);