const mongoose = require('mongoose');

function initial() {
  // Your initialization code here
}

mongoose
  .connect("mongodb+srv://bett:19990303je@cluster0.okpp7ux.mongodb.net/karaba?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial(); // Call your initialization function here
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit(1); // Exit the application on connection error
  });
