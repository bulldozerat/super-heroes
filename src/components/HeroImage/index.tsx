import React from 'react';
import { observer } from 'mobx-react';

let HeroImage = (props:any) => {
  return (
      <img src={props.image} alt="" />
  )
}

export default observer(HeroImage);
