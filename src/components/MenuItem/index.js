import Link from 'next/link'
import { useRouter } from 'next/router'
import { MENU_ITEM } from '@/constants/menu-items'
export default function MenuItem() {
  const router = useRouter()
  return (
    <div className="menu-item-container">
      {MENU_ITEM.map((item) => (
        <div key={item.title} className="flex flex-col">
          <Link href={{ pathname: item.url, query: { title: item.title } }} className="menu-text">
            {item.title}
          </Link>
          {router.query.title === item.title && <div className="line-item"></div>}
        </div>
      ))}
    </div>
  )
}
