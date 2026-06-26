function StudentItem({ student, onMarkPresent }) {
  
  const initials = student.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className={`student-card ${student.present ? 'present' : ''}`}>
      <div className="student-avatar">{initials}</div>

      <h3 className="student-name">{student.name}</h3>

      <span
        className={`status-badge ${
          student.present ? 'badge-present' : 'badge-absent'
        }`}
      >
        {student.present ? 'Hadir' : 'Belum Hadir'}
      </span>

      <button
        className="btn-hadir"
        onClick={() => onMarkPresent(student.id)}
        disabled={student.present}
      >
        {student.present ? '✓ Sudah Hadir' : 'Tandai Hadir'}
      </button>
    </div>
  )
}
export default StudentItem
