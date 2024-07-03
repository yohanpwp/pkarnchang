import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from '../components/Header.jsx'
import Checkbox from '../components/Checkbox.jsx'
import FormatToday from '../components/Dates.jsx'
import Time from '../components/Time.jsx'
import Video from '../components/Video.jsx'
import Footer from '../components/Footer.jsx'


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
        <div className="container">
          <Header />
          <Video
          isPlaying={isPlaying}
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'/>
          <iframe width="720" height="480" src="https://www.youtube.com/embed/4tzmynf93p8?si=-ZkZ2TVK1RFTfI7G" title="YouTube video player" 
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying? 'Pause' : 'Play'}</button>
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
            {/* บอกวันที่ */}
            <h6>{FormatToday()}</h6>
          </div>
          <div>
            {/* บอกวันที่และเวลาปัจจุบัน */}
            <Time />
            <img src= {reactLogo} />
          </div>
      </div>
      </div>
      <div className='container-fluid'>
            <Footer />
      </div>
    </>
  )
}

export default App
