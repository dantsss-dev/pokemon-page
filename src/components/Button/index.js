import Link from 'next/link'

export const Button = ({ label, url }) => (
  <Link href={{ pathname: url }} className="btn-primary">
    {label}
  </Link>
)
