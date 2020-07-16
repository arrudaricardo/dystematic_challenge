import data from "../../data/data.json";

const resolvers = {
  Query: {
    Securities: (): typeof data => data,
  },
};

export default resolvers;