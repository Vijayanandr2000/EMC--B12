import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();

const PORT = 8080;

const MONGO_URI =
  "mongodb+srv://Anand:gksJxEx5Rh6agZJ0@cluster0.1axup.mongodb.net/";

//middleware
app.use(express.json());
app.use(cors());

const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDatabase = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("loginApp").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

connectDatabase().catch(console.dir);

const findExistingUser = async (email) => {
  //Upsert -> Update + insert
  return await client.db("loginApp").collection("user").findOne({ email });
};

const check = (a, b) => a == b;

app.get("/", (_, res) => {
  res.send("API is wrking fine");
});

app.get("/vijay", (_, res) => {
  res.send("vijay API is wrking fine");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await findExistingUser(email);

    if (existingUser) {
      return res.status(400).json({
        message: "User email already exists!",
      });
    }

    const userPayload = { email, password };

    // users.push(userPayload);
    await client.db("loginApp").collection("user").insertOne(userPayload);

    return res.status(201).json({
      message: "User created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

app.get("/login", async (req, res) => {
  try {
    const { email, password } = req.query;

    const existingUser = await findExistingUser(email);

    if (!existingUser) {
      return res.status(404).json({
        message: "User email not found",
      });
    }

    if (check(password, existingUser.password)) {
      return res.status(200).json({
        message: "User Logged In",
      });
    }

    return res.status(400).json({
      message: "Invalid Credential",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const mongoId = new ObjectId(id);

    const resp = await client
      .db("loginApp")
      .collection("user")
      .deleteOne({ _id: mongoId });

    if (resp.deletedCount === 0) {
      return res.status(404).json({
        message: "User Id Not Found",
      });
    }

    return res.status(200).json({
      message: "Successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { newPassword } = req.body;

    const mongoId = new ObjectId(id);

    const resp = await client
      .db("loginApp")
      .collection("user")
      .updateOne(
        { _id: mongoId },
        {
          $set: { password: newPassword },
        }
      );

    if (resp.modifiedCount === 0) {
      return res.status(404).json({
        message: "User Id Not Found",
      });
    }

    return res.status(200).json({
      message: "Successfully updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

/**
 * PUT
 * account-> PATCH
 * {
 * id: 123
 * name: vijay -> vijay_v
 * email: abc@gmail.com
 * password: 123
 * }
 *
 *
 */
