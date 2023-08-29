export const Label = ({ label, className, clickEvent = null }) => {
  return (
    <div className={className} onClick={clickEvent}>
      {label}
    </div>
  )
}
