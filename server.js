import express from "express";

const app = express();

app.use(express.json());

let currentUser = {
  name: "John Doe",
  age: 54,
  hair_color: "Brown",
  hobbies: ["Reading", "Hiking", "Cooking"],
};

let users = [
  {
    name: "John Smith",
    age: 28,
    hair_color: "Brown",
    hobbies: ["Reading", "Hiking", "Cooking"],
  },
  {
    name: "Sarah Johnson",
    age: 35,
    hair_color: "Blonde",
    hobbies: ["Painting", "Swimming", "Gardening"],
  },
  {
    name: "Michael Brown",
    age: 22,
    hair_color: "Black",
    hobbies: ["Video Games", "Basketball", "Traveling"],
  },
  {
    name: "Emily Davis",
    age: 30,
    hair_color: "Red",
    hobbies: ["Photography", "Yoga", "Dancing"],
  },
  {
    name: "James Wilson",
    age: 40,
    hair_color: "Gray",
    hobbies: ["Fishing", "Golf", "Cooking"],
  },
  {
    name: "Olivia Lee",
    age: 25,
    hair_color: "Brown",
    hobbies: ["Running", "Reading", "Painting"],
  },
  {
    name: "Daniel Anderson",
    age: 32,
    hair_color: "Blonde",
    hobbies: ["Skiing", "Photography", "Hiking"],
  },
  {
    name: "Ava Taylor",
    age: 27,
    hair_color: "Black",
    hobbies: ["Cooking", "Traveling", "Swimming"],
  },
  {
    name: "William Martinez",
    age: 29,
    hair_color: "Brown",
    hobbies: ["Gaming", "Reading", "Basketball"],
  },
  {
    name: "Sophia Rodriguez",
    age: 24,
    hair_color: "Red",
    hobbies: ["Dancing", "Yoga", "Photography"],
  },
  {
    name: "Liam Harris",
    age: 37,
    hair_color: "Gray",
    hobbies: ["Golf", "Fishing", "Cooking"],
  },
  {
    name: "Isabella King",
    age: 26,
    hair_color: "Blonde",
    hobbies: ["Painting", "Hiking", "Running"],
  },
];

let products = [
  {
    name: "Smartphone",
    price: 499.99,
    description:
      "A high-performance smartphone with a large display and advanced camera features.",
    rating: 4.5,
  },
  {
    name: "Laptop",
    price: 899.99,
    description:
      "A powerful laptop with a fast processor and ample storage for your work and entertainment needs.",
    rating: 4.8,
  },
  {
    name: "Headphones",
    price: 79.99,
    description:
      "High-quality headphones with noise-cancellation technology for immersive audio experiences.",
    rating: 4.3,
  },
  {
    name: "Smart TV",
    price: 649.99,
    description:
      "A smart television with a 4K Ultra HD display and streaming capabilities.",
    rating: 4.6,
  },
  {
    name: "Fitness Tracker",
    price: 49.99,
    description:
      "A fitness tracker with heart rate monitoring and activity tracking features.",
    rating: 4.2,
  },
  {
    name: "Digital Camera",
    price: 399.99,
    description:
      "A versatile digital camera with multiple shooting modes and high-resolution image capture.",
    rating: 4.4,
  },
  {
    name: "Tablet",
    price: 299.99,
    description:
      "A compact tablet with a responsive touchscreen and long battery life.",
    rating: 4.0,
  },
  {
    name: "Gaming Console",
    price: 349.99,
    description:
      "A gaming console with powerful graphics and a vast library of games.",
    rating: 4.7,
  },
  {
    name: "Coffee Maker",
    price: 69.99,
    description:
      "A coffee maker with programmable brewing options and a stylish design.",
    rating: 4.1,
  },
  {
    name: "Bluetooth Speaker",
    price: 29.99,
    description:
      "A portable Bluetooth speaker with high-quality sound and long battery life.",
    rating: 4.3,
  },
  {
    name: "External Hard Drive",
    price: 129.99,
    description:
      "An external hard drive with massive storage capacity for your files and backups.",
    rating: 4.5,
  },
  {
    name: "Smart Watch",
    price: 199.99,
    description:
      "A smartwatch with fitness tracking, notifications, and a stylish design.",
    rating: 4.4,
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === id));
});

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
