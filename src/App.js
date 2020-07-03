import React, { Component } from 'react';

import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
class App extends Component {
  render() {
    return (
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Worker
          workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js"
        >
          <div
            style={{
              height: '700px',
            }}
          >
            <Viewer fileUrl="http://localhost:8080/image/23d02bba-2845-448b-852b-4fc77bcfbcc4.pdf" />
          </div>
        </Worker>

      </div>
    );
  }
}

export default App;