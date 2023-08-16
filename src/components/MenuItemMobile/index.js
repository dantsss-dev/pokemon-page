import Link from 'next/link'
import { MENU_ITEM } from '@/constants/menu-items'
import Image from 'next/legacy/image'

export default function MenuItemMobile() {
  return (
    <div className="modal-menu-item">
      <Image src={require('@/assets/svg/Logo.svg')} alt="Logo-m" width={138} height={51} />
      {MENU_ITEM.map((item) => (
        <div key={item.title} className="w-full">
          <Link href={{ pathname: item.url, query: { title: item.title } }} className="text-3xl">
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
