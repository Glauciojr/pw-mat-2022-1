import * as React from 'react'

let init = 0

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  // const [name, setName] = React.useState(initialName)
  
  // Quando o useState recebe como valor inicial UMA FUNÇÃO,
  // a inicialização da variável de estado passa a ocorrer
  // apenas uma vez, na fase de montagem do componente.
  // Isso é chamado LAZY INITIALIZER.
  const [name, setName] = React.useState(
    // Recupera o valor do item 'name' do localStorage
    // ou usa o valor de initialName
    () => window.localStorage.getItem('name') ?? initialName
  )

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    // Salva o estado no localStorage
    window.localStorage.setItem('name', name)
    console.count('useEffect')
  }, [name])
  // [] é o vetor de dependências
  // Quando vazio, o useEffect() será executado apenas uma vez,
  // na fase de montagem (mount)
  // Quando tem conteúdo, o useEffect() será executado quando
  // a(s) variável(is) especificada(s) for(em) atualizada(s).

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App