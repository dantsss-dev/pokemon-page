import Image from 'next/legacy/image'
import MenuItem from '../MenuItem'
import { useState } from 'react'
import ModalMenu from '../ModalMenu'

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
        <div className="burger-btn" onClick={openModal}>
          <Image src={require('@/assets/svg/BurgenBtn.svg')} alt="Logo" layout="responsive" />
        </div>
      </div>
      {isModalOpen && <ModalMenu closeModal={closeModal} />}
    </nav>
  )
}
