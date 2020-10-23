import React, { useState } from 'react';
import Slider from './components/Slider';
import styled from 'styled-components';

const DialogButton = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
 i {
    font-size: 100px;
 }
 text-align: center;
`;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;
const CheezeTxt = styled.div`
 font-size: 20px;
`;
function App() {
  const [Dialog, setDialog] = useState(false);

  const onHandleDialog = () => {
    setDialog(!Dialog);
  }
  return (
    <Template>
      <DialogButton onClick={onHandleDialog}>
        <i class="fas fa-cheese"></i>
      </DialogButton>
      <CheezeTxt>남궁권 Button</CheezeTxt>
      { Dialog && <Slider onHandleDialog={onHandleDialog}></Slider>}
    </Template>
  );
}

export default App;
