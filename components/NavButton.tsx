import Link from 'next/link'

interface NavProps {
  name: string,
  path: string
}

// main navbar buttons home, contact, etc
const NavButton: React.FC<NavProps> = props => {
  return (
    <div className='hover:cursor-pointer opacity-[0.7] hover:underline hover:opacity-[1] mr-1 hover:underline-offset-4'>
      <Link href={props.path}>
        <h1>{props.name}</h1>
      </Link>
    </div>
  )
}

export default NavButton