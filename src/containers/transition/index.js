import React  from  'react'
import Base from './Base';
import MountOnEnter from './MountOnEnter';
import UnmountOnExit from './UnmountOnExit';
import Appear from './Appear';
import AddEndListener from './AddEndListener';


function TransitionDemo (){
  
  
  return (
    <div style={{ padding: '20px' }}>
      <Base ></Base>
      <MountOnEnter></MountOnEnter>
      <UnmountOnExit ></UnmountOnExit>
      <Appear ></Appear>
      <AddEndListener></AddEndListener>
    </div>
  );
}

export default TransitionDemo