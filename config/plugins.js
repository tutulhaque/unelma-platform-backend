module.exports = ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwt: {
        expiresIn: "7d",
      },
      providers: {
        google: {
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: "http://localhost:5173/google/callback",
        },
      },
    },
  },
});
