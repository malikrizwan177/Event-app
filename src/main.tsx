import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './context/EventContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <EventContextProvider>
      <App/>
    </EventContextProvider>
  </BrowserRouter>
)
