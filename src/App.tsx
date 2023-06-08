import {
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  CommentOutlined,
  StarOutlined,
  ShareAltOutlined,
  WarningOutlined,
  MailOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { Button, Menu, Dropdown, Space, Tooltip } from 'antd';
import React, { useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState<number>(0)
  const [message, setMessage] = useState<string>('Hi there, How are you?')
  const [dateTime, setDateTime] = useState<any>(new Date())
  const [ testBool, setTestBool ] = useState<boolean>(false)

  const countTitle = () => {
    if(count === 0){
      document.title = `plase click me`;
  }else{
      document.title = `You clicked ${count} times`;
  }
  }

  const time = () => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
      return () => {
          clearInterval(id);
      }
  }
  
  const test = () => {
      //console.log('trigger use effect now')
      console.log('this is test')

      setTimeout(() => {
          setMessage("I'm fine ,thanks for asking.")
      }, 1000)
  }

  useEffect(() => {
      test()
      time()
      countTitle()
  },[])

  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
              Click me
          </button>
          <h1>{message}</h1>
          <h4>{dateTime.toLocaleTimeString()}</h4>
      </div>
  );
}

export default App;