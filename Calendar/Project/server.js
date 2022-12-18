import { createServer } from "http";
import { createSchema, createYoga, createPubSub } from "graphql-yoga";
const pubSub = createPubSub();
createServer(
  createYoga({
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          hello: String
        }
        type Mutation {
          publishDate(value: String): String
        }
        type Subscription {
          dateShare: String
        }
      `,
      resolvers: {
        Query: {
          hello: () => "Hello Hello Hello",
        },
        Mutation: {
          publishDate: (value, args) => {
            pubSub.publish("publishDate", args);
          },
        },
        Subscription: {
          dateShare: {
            subscribe: (value) => pubSub.subscribe("publishDate"),
            resolve: ({ value }) => {
              console.log(value);
              return value;
            },
          },
        },
      },
    }),
  })
).listen(4000, () => {
  console.info("GraphQL Yoga is listening on http://localhost:4000/graphql");
});
