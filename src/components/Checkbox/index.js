export const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <>
      <label className="checkbox-label group">
        <input
          type="checkbox"
          value={label}
          className="checkbox"
          onChange={onChange}
          defaultChecked={isChecked}
        />
        {label}
      </label>
    </>
  )
}
