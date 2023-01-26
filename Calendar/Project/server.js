import { createServer } from "http";
import { createSchema, createYoga, createPubSub } from "graphql-yoga";
const pubSub = createPubSub();
createServer(
  createYoga({
    schema: createSchema({
      typeDefs: /* GraphQL */ `
        type Video {
          title: String
        }
        type video {
          text: String
        }
        type Query {
          createVideo: video
          hello: String
          videos: [Video!]!
        }
        input NewVideo {
          title: String!
        }

        type Mutation {
          publishDate(value: String): String
          addVideo(value: String): String
          createVideo(input: NewVideo!): Video
        }
        type Subscription {
          dateShare: String
          videoAdded(title: String!): Video
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
          createVideo: (value, args) => {
            console.log("POP");
            pubSub.publish("createVideo", args);
          },
        },
        Subscription: {
          videoAdded: {
            subscribe: (value) => pubSub.subscribe("createVideo"),
            resolve: (x) => {
              console.log("videoAdded", x);
              return x;
            },
          },
          dateShare: {
            subscribe: (value) => pubSub.subscribe("publishDate"),
            resolve: ({ value }) => {
              console.log("dateShare", value);
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
