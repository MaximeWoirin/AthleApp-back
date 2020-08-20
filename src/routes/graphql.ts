var { graphqlHTTP } = require("express-graphql");
import init_graphql from "../infrastructure/graphql";

const graphqlRouter = graphqlHTTP(init_graphql());

export default graphqlRouter;
