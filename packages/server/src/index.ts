import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { createTypeormConn } from "./createTypeormConn";
import { createSchema } from "./createSchema";

import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as cors from "cors";
import { redis } from "./redis";

const RedisStore = connectRedis(session);
const SESSION_SECRET = "keyboarddzedqzeddcat";

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000"
};

const startServer = async () => {
  await createTypeormConn();

  const app = express();

  app.use(cors(corsOptions));

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 365 * 7 // 7 days
      }
    })
  );

  const server = new ApolloServer({
    schema: createSchema(),
    context: ({ req }: any) => ({ req })
  });

  server.applyMiddleware({ app, cors: false }); // app is from an existing express app

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
