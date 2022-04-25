
import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 crie uma ref aqui usando React.useRef()

  // Criando uma referência a um elemento usando o hook useRef
  const divContainer = React.useRef()

  React.useEffect(() => {
    const tiltNode = divContainer.current
    VanillaTilt.init(tiltNode, {
      max: 50,
      speed: 1000,
      glare: true,
      'max-glare': 0.5
    })

    // Quando o useEffect retorna uma função, esta é executada
    // apenas uma vez no momento do descarregamento (desmontagem)
    // do componente. Normalmente, isso é usado para tarefas de 
    // limpeza
    return () => tiltNode.vanillaTilt.destroy() // Limpa as divs extras

  }, []) // -> Vetor de dependências vazio: useEffect() será executado
  // apenas uma vez, na montagem (carregamento) do componente

  // 🐨 adicione uma função `React.useEffect` aqui e use VanillaTilt para
  // fazer sua div parecer fantástica.
  // 💰 assim:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Não se esqueça de retornar uma função de limpeza. VanillaTilt.init 
  // vai adicionar um objeto ao seu DOM, precisando ser eliminado:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.

  // 🐨 adicione a prop `ref` à div `tilt-root` aqui:
  return (
    <div className="tilt-root" ref={divContainer}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
      <Tilt>
        <div className="totally-centered">vanilla-tilt.js</div>
      </Tilt>
    </>
  )
}

export default App