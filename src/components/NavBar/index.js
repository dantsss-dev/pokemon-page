import Image from 'next/legacy/image'
import MenuItem from '../MenuItem'
import { useState } from 'react'
import Modal from '../Modal'
import MenuMobile from '../MenuMobile'
import { BurgerButton } from '../BurgerButton'

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <nav className="nav-container">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo-box">
          <Image src={require('@/assets/svg/Logo.svg')} alt="Logo" layout="responsive" />
        </div>
        <MenuItem />
        <BurgerButton openModal={openModal} />
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} component={MenuMobile} className="modal-top" />
      )}
    </nav>
  )
}
