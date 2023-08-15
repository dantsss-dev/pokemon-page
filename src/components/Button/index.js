import Link from 'next/link'

export default function Button({ label, url, slug }) {
  return (
    <Link href={{ pathname: url, query: { title: slug } }} className="btn-primary">
      {label}
    </Link>
  )
}
