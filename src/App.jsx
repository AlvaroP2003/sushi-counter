import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const storedScore = localStorage.getItem('high_score')
    if (storedScore) {
      setHighScore(Number(storedScore)) 
    }
  }, []) 

  const handleHighScore = () => {
    if (count > highScore) {
      setHighScore(count) 
    }
  }

  useEffect(() => {
    if (highScore > 0) {
      localStorage.setItem('high_score', highScore.toString()) 
    }
  }, [highScore]) 

  const addSushi = () => setCount(prev => prev + 1)
  const subtractSushi = () => setCount(prev => (prev > 0 ? prev - 1 : prev)) 


  useEffect(() => {
    handleHighScore()
  }, [count])

  return (
    <main>
      <div className="container">
        <div className="img-container">
          <img src='src\assets\sushi_mascot-removebg-preview.png' alt="Sushi"/>
        </div>
        <div className="btn-container">
          <button className="subtract" onClick={subtractSushi}>-</button>
          <div className="current-count">{count}</div>
          <button className="add" onClick={addSushi}>+</button>
        </div>
      </div>
      <div className="high-score">HIGH SCORE : {highScore}</div>
    </main>
  )
}

export default App
