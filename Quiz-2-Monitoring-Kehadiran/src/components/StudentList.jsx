import StudentItem from './StudentItem'

function StudentList({ students, onMarkPresent }) {
  return (
    <section className="student-list">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onMarkPresent={onMarkPresent}
        />
      ))}
    </section>
  )
}

export default StudentList
