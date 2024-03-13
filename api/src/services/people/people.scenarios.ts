import type { Prisma, Person } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PersonCreateArgs>({
  person: {
    one: {
      data: {
        fullName: 'String',
        firstName: 'String',
        preferredName: 'String',
        lastName: 'String',
        email: 'String',
        updatedAt: '2024-03-09T02:28:47.841Z',
      },
    },
    two: {
      data: {
        fullName: 'String',
        firstName: 'String',
        preferredName: 'String',
        lastName: 'String',
        email: 'String',
        updatedAt: '2024-03-09T02:28:47.841Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Person, 'person'>
