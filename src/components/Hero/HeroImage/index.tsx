import React from 'react';
import { observer } from 'mobx-react';

interface HeroImageProps {
  image: string
}

let HeroImage = (props:HeroImageProps) => {
  return (
      <img src={props.image} alt="" />
  )
}

export default observer(HeroImage);
