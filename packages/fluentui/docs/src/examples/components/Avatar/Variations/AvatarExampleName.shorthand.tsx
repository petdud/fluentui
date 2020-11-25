import * as React from 'react';
import { Avatar } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const AvatarExampleNameShorthand = () => (
  <Avatar
    name="John Doe"
    status={{
      icon: <AcceptIcon />,
      state: 'success',
      title: 'Available',
    }}
  />
);

export default AvatarExampleNameShorthand;
