export const PokemonStat = ({ label, value }) => (
  <div className="stat-container">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
)
