import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header.jsx'
import Checkbox from '../components/Checkbox.jsx'
import FormatToday from '../components/Dates.jsx'
import Time from '../components/Time.jsx'
import Video from '../components/video.jsx'


function App() {
  const toDoList = [
    {
      text : "Training",
      isChecked : true
    },
    {
      text : "Programming",
      isChecked : false 
    },
    {
      text : "Learning",
      isChecked : false 
    }
  ]
  // กำหนดตัวแปรใช้ React Hook ด้วย useStat
  const [count, setCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <div>
        <Header />
          <Video
          isPlaying={isPlaying}
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'/>
          <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
          </div>
          <div>Now counter is {count}</div>
          
          {/* สร้างปุ่มขึ้นมาเพิ่มและลบจำนวน {count}หรือประกาศฟังก์ชั้นแล้วค่อยผูกกับฟังก์ชั้นอีเว้นonClickได้ 
          function buttonClick() {setCount(count + 1)}*/}
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count - 1)}>Delete</button>
          <div>
            {/* นำข้อมูล(map)ของtoDoListเข้ามาแสดงผลผ่านเงื่อนไขcheckbox */}
            {toDoList.map((todo,index) => {
              return <Checkbox text={todo.text} isChecked={todo.isChecked} key={index} />
            })}
          </div> 
          <div>
            <h6>{FormatToday()}</h6>
          </div>
          <div>
            <Time />
          </div>
      </div>
    </>
  )
}

export default App
