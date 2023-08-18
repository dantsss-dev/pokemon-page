import Link from 'next/link'

export const Button = ({ label, url, slug }) => (
  <Link href={{ pathname: url, query: { title: slug } }} className="btn-primary">
    {label}
  </Link>
)
