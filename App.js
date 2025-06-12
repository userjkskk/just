import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample data structure
  const [matrixData, setMatrixData] = useState([
    {
      id: 1,
      header: 'Technology',
      subCells: [
        { id: 101, title: 'React', content: 'React is a JavaScript library for building user interfaces.' },
        { id: 102, title: 'Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
        { id: 103, title: 'TypeScript', content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.' }
      ]
    },
    {
      id: 2,
      header: 'Science',
      subCells: [
        { id: 201, title: 'Physics', content: 'Physics is the natural science that studies matter and its motion.' },
        { id: 202, title: 'Chemistry', content: 'Chemistry is the scientific discipline involved with elements and compounds.' },
        { id: 203, title: 'Biology', content: 'Biology is the natural science that studies life and living organisms.' }
      ]
    },
    {
      id: 3,
      header: 'Arts',
      subCells: [
        { id: 301, title: 'Painting', content: 'Painting is the practice of applying paint to a solid surface.' },
        { id: 302, title: 'Music', content: 'Music is the art of arranging sounds in time to produce a composition.' },
        { id: 303, title: 'Literature', content: 'Literature is any collection of written work considered to be art.' }
      ]
    }
  ]);

  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedSubCell, setSelectedSubCell] = useState(null);

  return (
    <div className="app-container">
      <h1>Matrix Panel Website</h1>
      <div className="matrix-container">
        {/* Left Matrix Panel */}
        <div className="left-matrix">
          <h2>Categories</h2>
          <div className="headers-container">
            {matrixData.map((headerItem) => (
              <div 
                key={headerItem.id} 
                className={`header-cell ${selectedHeader?.id === headerItem.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedHeader(headerItem);
                  setSelectedSubCell(null);
                }}
              >
                {headerItem.header}
                <div className="sub-cells-container">
                  {headerItem.subCells.map((subCell) => (
                    <div 
                      key={subCell.id} 
                      className={`sub-cell ${selectedSubCell?.id === subCell.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSubCell(subCell);
                      }}
                    >
                      {subCell.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Matrix Panel */}
        <div className="right-matrix">
          <h2>Details</h2>
          {selectedSubCell ? (
            <div className="content-display">
              <h3>{selectedSubCell.title}</h3>
              <p>{selectedSubCell.content}</p>
            </div>
          ) : selectedHeader ? (
            <div className="content-display">
              <h3>{selectedHeader.header}</h3>
              <p>Select a sub-category from the left panel to view details.</p>
            </div>
          ) : (
            <div className="content-display">
              <h3>Welcome</h3>
              <p>Please select a category from the left panel to begin.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
