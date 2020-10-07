const { nexusPrismaPlugin } = require('nexus-prisma')
const { idArg, stringArg, makeSchema, objectType } = require('@nexus/schema')

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

    t.list.field('getUsers', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user.findMany()
      },
    })

    // todo
    // create the others field

  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {

    t.field('signupUser', {
      type: 'User',
      args: {
        email: stringArg({ nullable: false }),
        name: stringArg({ nullable: false }),
      },
      resolve: (parent, { email, name }, ctx, info) => {
        return ctx.prisma.user.create({
          data: {
            name,
            email,
          }
        })
      }
    })

    // todo
    // create the others field

  },
})

const schema = makeSchema({
  types: [Post, User],
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
