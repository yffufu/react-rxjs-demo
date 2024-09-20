import { useState } from 'react'
import Drag from './pages/Drag'
import Input,{Input2} from './pages/Input'
import Follow from './pages/Follow'
import Test from './pages/Test'
import './App.less'

const examples = [
  {
    name: "Drag",
    Component: Drag
  },
  {
    name: "Input",
    Component: Input
  },
  {
    name: "Input2",
    Component: Input2
  },
  {
    name: "Follow",
    Component: Follow
  },
  {
    name: "Test",
    Component: Test
  },
]
function App() {
  const [key, setKey] = useState('Drag')
  const Cmp=examples.find(item => item.name === key)?.Component
  return <div className='main'>
    <div className='header'>
      <span>examples:</span>
      {
        examples.map(item => {
          return <button
            key={item.name}
            onClick={() => { setKey(item.name) }}>
            {item.name}
          </button>
        })
      }
    </div>
    <div>
      {
        Cmp ? <Cmp /> : null
      }
    </div>
  </div>
}

export default App
