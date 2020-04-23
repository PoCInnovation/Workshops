const { nexusPrismaPlugin } = require('nexus-prisma')
const { idArg, makeSchema, objectType, stringArg } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  description: "User table",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.posts({
      pagination: false,
    })
  },
})

// todo:
// objectType of Post table

const Query = objectType({
  name: 'Query',
  definition(t) {

    // todo
    // create a query field

  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {

    // todo
    // create a Mutation field

  },
})

const schema = makeSchema({
  types: [Query, Mutation, Post, User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})

module.exports = {
  schema
}