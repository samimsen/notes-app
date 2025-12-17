import { useState } from 'react'
import './App.css'

function App() {

  const colors = [
    { id: 1, color: "#F06292" },
    { id: 2, color: "#BA68C8" },
    { id: 3, color: "#FFD54F" },
    { id: 4, color: "#4FC3F7" },
    { id: 5, color: "#AED581" },
  ]

  const [selectedColor, setSelectedColor] = useState(colors[0].color)

  const [note, setNote] = useState("")

  const [notes, setNotes] = useState([])

  const [search, setSearch] = useState("");

  const handleAddNote = () => {
    if (note.trim() === "") return
    setNotes([...notes, { note: note, color: selectedColor }])
    setNote("")
  }

  const filteredNotes = notes.filter((item) =>
    item.note.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='app-container'>
      <h1 className='page-title'>NotesApp</h1>
      <input id='search-input' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
      <textarea id='note' value={note} placeholder='Enter your note here...'
        onChange={(e) => setNote(e.target.value)}></textarea>
      <div id='bottom'>
        <div className='colors'>
          {
            colors.map((color) => (
              <button
                key={color.id}
                className={selectedColor === color.color ? "color" : "active color"}
                style={{
                  backgroundColor: `${color.color}`
                }}
                onClick={() => setSelectedColor(color.color)}
              >
                {selectedColor === color.color ? <span className="material-symbols-outlined">check</span> : ""}
              </button>
            ))
          }
        </div>
        <div className='button'>
          <button className='success-btn' onClick={handleAddNote}>ADD</button>
        </div>
      </div>

      <div className='notes-area'>
        {filteredNotes.map((note, index) => (
          <div className='single-note' key={index} style={{ backgroundColor: note.color }}>{note.note}</div>
        ))}
      </div>

    </div >
  )
}

export default App