import { useState } from "react";
import AlignWeek from "./views/AlignWeek";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      TESTTEXT
      <AlignWeek />
    </div>
  );
}

export default App;
