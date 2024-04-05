import { faker} from '@faker-js/faker'

export const attendees = Array.from( {length:200}).map(() =>{
   return {
      id: faker.number.int( { min: 10000, max:50000}),
      name: faker.person.fullName(),
      email: faker.internet.email().toLocaleLowerCase(),
      createdAt: faker.date.recent({days:60}),
      checkedInAt: faker.date.recent({days:30})

   }
})