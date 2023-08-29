import { useState } from 'react'
export const Dropdown = ({ label, Children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="dropdown-container">
      <div className="relative inline-block text-left">
        <div>
          <button type="button" className="dropdown-btn" onClick={toggleDropdown}>
            {label}
          </button>
        </div>
        {isDropdownOpen && (
          <>
            <Children stat={label} />
          </>
        )}
      </div>
    </div>
  )
}
