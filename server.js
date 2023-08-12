import { connectDB } from "./data/database.js";
import { app } from "./user.js";
const port = 80;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  