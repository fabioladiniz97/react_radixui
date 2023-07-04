import React from 'react';
import DialogDemo from './components/button_dialog/dialog.component';
import AvatarDemo from './components/avatar/avatar.component';

const App: React.FC = () => {
  return (
    <div>
      <h1 className='titulo'>FaceDivas</h1>
      <p className='resumo'> A rede Social das Divas!</p>
      <DialogDemo />
      <AvatarDemo/>
    </div>
  );
};

export default App;
