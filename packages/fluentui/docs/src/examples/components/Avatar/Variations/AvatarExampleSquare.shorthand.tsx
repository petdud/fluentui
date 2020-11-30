import * as React from 'react';
import { Avatar, makeStyles } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const useStatusRedOverrides = makeStyles([[null, { backgroundColor: 'red' }]]);
const useStatusGreenOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);

const AvatarExampleSquare = () => (
  <div>
    <Avatar
      image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg"
      square
      status={{ className: useStatusGreenOverrides(), icon: <AcceptIcon />, title: 'Available' }}
    />
    &emsp;
    <Avatar name="John Doe" square status={{ className: useStatusRedOverrides(), title: 'Busy' }} />
    &emsp;
  </div>
);

export default AvatarExampleSquare;
