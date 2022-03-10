import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  source: string,
  size: number
  path: string
}

// logo icons on either sides of navbar
const LogoIcon: React.FC<LogoProps> = ({ source, size, path }) => {
  return (
    <div className='sm:hover:scale-110 hover:cursor-pointer ml-6 sm:transition-all'>
      <Link href={path}>
        <Image src={source} width={size} height={size} />
      </Link>
  </div>

  )
}

export default LogoIcon;