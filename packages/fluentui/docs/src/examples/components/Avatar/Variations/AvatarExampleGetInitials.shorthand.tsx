import * as React from 'react';
import { Avatar, makeStyles } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const useStatusOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);
const getInitials = name => name.split(' ').map(word => `${word[0]}.`);

const AvatarExampleGetInitialsShorthand = () => (
  <Avatar
    name="John Doe"
    getInitials={getInitials}
    status={{ className: useStatusOverrides(), icon: <AcceptIcon />, title: 'Available' }}
  />
);

export default AvatarExampleGetInitialsShorthand;
