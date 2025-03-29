import MainPage from "./pages/main-page/MainPage" 
import NotFoundPage from "./pages/not-found/NotFoundPage"
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
      <Routes>
        <Route path="/LogsAnalyzer-VKproject/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
