import * as React from 'react';
import { Avatar, makeStyles } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const AvatarExampleExcludedInitialsShorthand = () => {
  const useStatusOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);
  const status = { className: useStatusOverrides(), icon: <AcceptIcon />, title: 'Available' };

  return (
    <div>
      <Avatar name="John Doe (Software Developer)" status={status} />
      &emsp;
      <Avatar name="John Doe {Software Developer}" status={status} />
      &emsp;
      <Avatar name="John Doe [Software Developer]" status={status} />
      &emsp;
      <Avatar name="John A B Doe" status={status} />
    </div>
  );
};

export default AvatarExampleExcludedInitialsShorthand;
