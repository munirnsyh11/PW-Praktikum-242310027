import { useState } from 'react'
import StudentList from './components/StudentList'
import ThemeToggle from './components/ThemeToggle'
import AttendanceSummary from './components/AttendanceSummary'
import './App.css'

const initialStudents = [
  { id: 1, name: 'munir riansyah', present: false },
  { id: 2, name: 'nabila AZ', present: false },
  { id: 3, name: 'Citra Lestari', present: false },
  { id: 4, name: 'Dewi Anggraini', present: false },
  { id: 5, name: 'Eka Pratama', present: false },
  { id: 6, name: 'Fajar Nugroho', present: false },
]

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [darkMode, setDarkMode] = useState(false)

  const handleMarkPresent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: true } : student
      )
    )
  }

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const totalPresent = students.filter((student) => student.present).length

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <div>
          <h1>Monitoring Kehadiran Mahasiswa</h1>
          <p className="app-subtitle">Pantau status kehadiran mahasiswa di kelas secara real-time</p>
        </div>
        <ThemeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
      </header>

      <AttendanceSummary total={students.length} present={totalPresent} />

      <main>
        <StudentList students={students} onMarkPresent={handleMarkPresent} />
      </main>

      <footer className="app-footer">
        <p>Quiz 2 &mdash; Pemrograman Web</p>
      </footer>
    </div>
  )
}

export default App
