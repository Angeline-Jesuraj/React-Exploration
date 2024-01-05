import React, { FC } from 'react'

interface Person {
  name: string
  age: number
}

const TypeScriptEg: FC = () => {
  const [personData, setPersonData] = React.useState<Person>({
    name: '',
    age: 0,
  })
  const [greetingmsg, setGreetingmsg] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonData({ ...personData, [event.target.name]: event.target.value })
    setGreetingmsg('')
  }

  const greetPerson = () => {
    setGreetingmsg(
      `Hello, ${personData.name} ! You are ${personData.age} years old.`,
    )
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={personData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={personData.age}
        onChange={handleChange}
      />
      <button onClick={greetPerson}>Greet</button>
      {greetingmsg && <p>{greetingmsg}</p>}
    </div>
  )
}

export default TypeScriptEg
