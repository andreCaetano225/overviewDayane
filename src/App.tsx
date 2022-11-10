import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [contador, setContador] = useState(10)

  const [nome, setNome] = useState('André')

  const [bloco, setBloco] = useState(false)

  useEffect(() => {
    setNome('Duda')
  }, [nome])


  return (

    // UTILIZANDO USESTATE

    // <div className="App">
    //   <div>

    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>React</h1>
    //   <div className="card">
    //     <button onClick={() => setBloco(true)}>
    //       Mudar de bloco
    //     </button>

    //     {bloco ? (
    //       // Quando o valor de bloco for true esse vai ser o retorno
    //       <>
    //         <div style={{ backgroundColor: 'green', width: '80%' }}>
    //           <span>Bloco 2</span>
    //         </div>
    //       </>
    //     ) :
    //       (
    //         // Quando o valor de bloco for false esse vai ser o retorno
    //         <>
    //           <div style={{ backgroundColor: 'pink', width: '80%' }}>
    //             <span>Bloco 1</span>
    //           </div>
    //         </>)
    //     }

    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>

    // UTILIZANDO USEEFFECT

    <div className="App">
      <div>

        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setNome('Dayane')}>
          Dayane
        </button>
        <button onClick={() => setNome('Victor')}>
          Victor
        </button>
        <button onClick={() => setNome('Luiz')}>
          Luiz
        </button>
        <h1>{nome}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
