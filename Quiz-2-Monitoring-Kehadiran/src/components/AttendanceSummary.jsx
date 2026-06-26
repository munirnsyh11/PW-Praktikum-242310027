function AttendanceSummary({ total, present }) {
  return (
    <div className="attendance-summary">
      <p>
        Mahasiswa Hadir: <strong>{present}</strong> dari{' '}
        <strong>{total}</strong> mahasiswa
      </p>
    </div>
  )
}

export default AttendanceSummary
