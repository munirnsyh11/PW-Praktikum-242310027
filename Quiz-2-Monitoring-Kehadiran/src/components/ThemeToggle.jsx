function ThemeToggle({ darkMode, onToggle }) {
  return (
    <div className="theme-toggle">
      <span className="theme-status">
        Mode aktif: <strong>{darkMode ? 'Dark Mode' : 'Light Mode'}</strong>
      </span>

      <button className="btn-toggle" onClick={onToggle}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  )
}

export default ThemeToggle
