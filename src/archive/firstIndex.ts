import { prisma } from '../generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  // Create a new user with a new joke
  const newUser = await prisma.createUser({
    name: 'Bob',
    email: 'bob@prisma.io',
    jokes: {
      create: [
        {
          title: 'Join us for GraphQL Conf in 2019',
        },
        {
          title: 'Subscribe to GraphQL Weekly for GraphQL news',
        },
      ],
    },
  })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const allJokes = await prisma.jokes()
  console.log(allJokes)
}

main().catch(e => console.error(e))
