import express from "express";
import cors from "cors";

const app = express();

const PORT = 8080;

const users = [
  {
    email: "abc@gmail.com",
    password: "123",
  },
];

//middleware
app.use(express.json());
app.use(cors());

const findExistingUser = (email) => {
  return users.find((user) => user.email == email);
};

const check = (a, b) => a == b;

app.get("/", (_, res) => {
  res.send("API is wrking fine");
});

app.post("/signup", (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = findExistingUser(email);

    if (existingUser) {
      return res.status(400).json({
        message: "User email already exists!",
      });
    }

    const userPayload = { email, password };

    users.push(userPayload);

    return res.status(201).json({
      message: "User created successfully!",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

app.get("/login", (req, res) => {
  try {
    const { email, password } = req.query;

    const existingUser = findExistingUser(email);

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

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

/**
 * PARAMS
 *
 * 1. Path ->  /:name/:email
 * 2. Query -> ?name=vijay&email=abc@gmail.com
 */
