import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataProvider } from './context/Context'
import { ContentProvider } from './context/ContentContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </DataProvider>
  </React.StrictMode>
)
