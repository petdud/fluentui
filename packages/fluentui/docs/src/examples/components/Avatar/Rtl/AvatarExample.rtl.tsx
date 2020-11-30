import * as React from 'react';
import { Avatar, makeStyles } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const useStatusOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);

const AvatarExampleRtl = () => (
  <Avatar
    name="جون دو"
    status={{
      className: useStatusOverrides(),
      icon: <AcceptIcon />,
    }}
  />
);

export default AvatarExampleRtl;
