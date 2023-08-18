import Image from 'next/legacy/image'
import { MenuItemMobile } from '../MenuItemMobile'

export default function MenuMobile({ closeModal }) {
  return (
    <div className="modal-content-yellow">
      <div className="modal-header">
        <button className="btn-close" onClick={closeModal}>
          <Image src={require('@/assets/svg/CloseIcon.svg')} alt="btn-close" layout="responsive" />
        </button>
      </div>
      <MenuItemMobile />
    </div>
  )
}
