const completionSpec: Fig.Spec = {
  name: "apify",
  description: "",
  subcommands: [
    {
      name: "call",
      description: "Runs a specific actor remotely on the Apify cloud platform",
      // subcommands: [{
      //   name: "my_ne",
      //   description: "Nested subcommand, example usage: 'apify my_subcommand my_nested_subcommand'"
      // }],
    },
    {
      name: "create",
      description:
        "Creates a new actor project directory from a selected boilerplate template",
    },
    {
      name: "info",
      description:
        "Displays information about the currently active Apify account",
    },
    {
      name: "init",
      description: "Initializes a new actor project in an existing directory",
    },
    {
      name: "login",
      description: "Logs in to your Apify account using a provided API token",
    },
    {
      name: "logout",
      description: "Logs out of your Apify account",
    },
    {
      name: "push",
      description:
        "Uploads the actor to the Apify platform and builds it there",
    },
    {
      name: "run",
      description:
        'Runs the actor locally in the current directory by executing "npm start"',
    },
    {
      name: "secrets",
      description: "Manages secret values for actor environment variables",
    },
    {
      name: "vis",
      description: "Validates INPUT_SCHEMA.json file and prints errors found",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for apify",
    },
  ],
  // Only uncomment if apify takes an argument
  // args: {}
};
export default completionSpec;
