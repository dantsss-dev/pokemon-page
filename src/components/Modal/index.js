export default function Modal({ closeModal, component: Component, className }) {
  return (
    <div className={className}>
      <Component closeModal={closeModal} />
    </div>
  )
}
