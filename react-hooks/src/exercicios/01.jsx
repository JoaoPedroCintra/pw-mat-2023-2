import * as React from 'react'

function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState
  //const name = ''
  const [name,setName] = React.useState(initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        {/* Um componente que tem tanto onChange quanto seu value
         ligados à variavel de estado é chamado de COMPONENTE CONTROLADO*/}
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio01() {
 // return Greeting({initialName: "Turíbio"})
  return <Greeting initialName= "Turíbio"/>
}

export default Exercicio01