import React, {useEffect, useState} from 'react';
import './App.css';
import List from './components/List'

type sub = {
  nick: string,
  subMonths: number,
  avatar: string,
  description?: string
}

interface AppState {
  subs: Array<sub>,
  newSubsNumber: number
}

const initial_state = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  },
  {
    nick: 'incocnitto',
    subMonths: 10,
    avatar: 'https://i.pravatar.cc/150?u=incocnitto',
    description: 'Streamer de vez en cuando'
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(initial_state)
  }, [])

  return (
      <div className="App">
        <h1>Incocnitto Subs</h1>
        <List subs={subs} />
      </div>
  );

}

export default App;
