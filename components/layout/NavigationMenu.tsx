import {
  ROUTE_SMALL_STANDARD,
  ROUTE_SMALL_OVERFLOW,
  ROUTE_FULL,
  ROUTE_ADD_EVENT,
} from "../../lib/routes"
import MenuButton from "./MenuButton"

const NavigationMenu = () => {
  return (
    <header className="mb-10 flex justify-between">
      <nav className="flex flex-col gap-4 md:flex-row">
        <MenuButton href={ROUTE_SMALL_STANDARD}>
          Small standard calendar
        </MenuButton>
        <MenuButton href={ROUTE_SMALL_OVERFLOW}>
          Small overflow calendar
        </MenuButton>
        <MenuButton href={ROUTE_FULL}>Full calendar</MenuButton>
      </nav>
      <MenuButton href={ROUTE_ADD_EVENT}>Add event</MenuButton>
    </header>
  )
}

export default NavigationMenu
