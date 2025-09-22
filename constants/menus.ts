import { CassetteTape, Home, SquareChevronLeft, SquareChevronRight, StepBack, Warehouse } from "lucide-react";

export const sideBarLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Upcoming', href: '/upcoming', icon: SquareChevronRight },
  { name: 'Previous', href: '/previous', icon: SquareChevronLeft },
  { name: 'Recordings', href: '/recordings', icon: CassetteTape },
  { name: 'Personal Room', href: '/personal-room', icon: Warehouse },
]