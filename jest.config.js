export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "babel-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts"],
};
