import "./App.css"
import Chapter from "./components/Chapter"
import { chapters } from "./data/chapters"

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>まのさばRTAチャート</h1>

        <nav className="chapter-nav">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`}>
              {chapter.title}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} />
        ))}
      </main>
    </div>
  )
}