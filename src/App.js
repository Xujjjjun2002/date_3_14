import logo from './logo.svg';
import './App.css';
import { Button, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('top');

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
      <div className="App">
        <header className="App-header">
        <Button className="dr1" type="primary" onClick={showDrawer}>
        标签集设置
        </Button>
      <Drawer
        title="标签集设置 Label Collection Settings"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p align = "left" > 标签名称</p>
        <p align = "right"><font color="blue">创建</font></p>
     
      </Drawer>  
       <Button className="dr2" type="primary" >标签设置</Button>
        <Button className="dr3" type="primary" >分类设置</Button>
        <Button className="dr4" type="primary" >图片属性设置</Button>
        <Button className="dr5" type="primary" >快捷键</Button>
        <Button className="dr6" type="primary" >其他设置</Button>
        </header>
    </div>
  );
};



export default App;
