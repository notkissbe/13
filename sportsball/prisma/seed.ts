import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

async function main() {
    for (let i = 0; i < 5; i++) {
        await prisma.team.create({
          data:{
            country: faker.location.country()
          }
        })
      }

  for (let i = 0; i < 15; i++) {
    await prisma.player.create({
      data: {
        name: faker.person.fullName(),
        goalCount: faker.number.int({ min: 0, max: 100 }),
        birthDate: faker.date.birthdate(),
        team: {
          connect: {
            id: 1
          }
        }
      }
    })
  }



  
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
