import { faker } from "@faker-js/faker"
import { addDays, formatISO } from "date-fns"
import Event from "../types/Event"

export const generateFakeEvent = (): Event => {
  const today = new Date()
  const start = faker.date.between(
    addDays(today, faker.datatype.number({ min: -10, max: 0 })),
    addDays(today, faker.datatype.number({ min: 0, max: 10 }))
  )
  const end = addDays(start, faker.datatype.number({ min: 0, max: 5 }))

  return {
    startTime: formatISO(start),
    endTime: formatISO(end),
    title: faker.company.catchPhrase(),
    participants: faker.helpers.uniqueArray(
      faker.internet.email,
      faker.datatype.number({ min: 1, max: 5 })
    ),
  }
}

export const generateFakeEventsArray = (length: number) => {
  return Array.apply(null, Array(length)).map(() => generateFakeEvent())
}
