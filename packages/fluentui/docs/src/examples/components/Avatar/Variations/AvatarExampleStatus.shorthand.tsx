import * as React from 'react';
import { Avatar, makeStyles } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const useStatusRedOverrides = makeStyles([[null, { backgroundColor: 'red' }]]);
const useStatusGreenOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);
const useStatusGreyOverrides = makeStyles([[null, { backgroundColor: 'grey' }]]);

const AvatarExampleStatusShorthand = () => (
  <div>
    <Avatar
      image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg"
      status={{ className: useStatusGreenOverrides(), icon: <AcceptIcon />, title: 'Available' }}
    />
    &emsp;
    <Avatar
      image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg"
      status={{ className: useStatusRedOverrides(), title: 'Busy' }}
    />
    &emsp;
    <Avatar
      image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg"
      status={{ className: useStatusGreyOverrides(), title: 'Offline' }}
    />
    &emsp;
  </div>
);

export default AvatarExampleStatusShorthand;
