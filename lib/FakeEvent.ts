import { faker } from "@faker-js/faker"
import { addDays } from "date-fns"
import Event from "../types/Event"

export const generateFakeEvent = (): Event => {
  const today = new Date()
  const start = faker.date.between(
    today,
    addDays(today, faker.datatype.number({ min: 0, max: 10 }))
  )
  const end = addDays(start, faker.datatype.number({ min: 0, max: 5 }))

  return {
    startTime: start,
    endTime: end,
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
