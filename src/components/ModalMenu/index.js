import Image from 'next/legacy/image'
import MenuItemMobile from '../MenuItemMobile'

export default function ModalMenu({ closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-dark bg-opacity-50">
      <div className="flex flex-col items-end yellow-gradient rounded-b-2xl p-6 shadow-lg w-full">
        <button className="btn-close" onClick={closeModal}>
          <Image src={require('@/assets/svg/CloseIcon.svg')} alt="btn-close" layout="responsive" />
        </button>
        <MenuItemMobile />
      </div>
    </div>
  )
}
