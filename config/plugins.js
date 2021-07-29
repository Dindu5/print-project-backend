module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "mailjet",
    providerOptions: {
      publicApiKey: env("MAILJET_PUBLIC_KEY"),
      secretApiKey: env("MAILJET_SECRET_KEY"),
    },
    settings: {
      defaultFrom: "chimdindue@gmail.com",
      defaultFromName: "Pog Print",
      defaultTo: "dindu696@gmail.com",
      defaultToName: "User",
    },
  },
  // ...
});
