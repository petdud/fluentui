import * as React from 'react';
import { Avatar, makeStyles } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const AvatarUsageExampleShorthand = () => {
  const useStatusOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);
  const status = { className: useStatusOverrides(), icon: <AcceptIcon />, title: 'Available' };

  return (
    <div>
      Correct:
      <div>
        <div
          style={{
            '--theme-bodyBackground': 'violet',
            backgroundColor: 'violet',
            padding: '1rem',
            display: 'inline-block',
          }}
        >
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
        <div
          style={{
            '--theme-bodyBackground': 'yellowgreen',
            backgroundColor: 'yellowgreen',
            padding: '1rem',
            display: 'inline-block',
          }}
        >
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
        <div
          style={{
            '--theme-bodyBackground': 'orangered',
            backgroundColor: 'orangered',
            padding: '1rem',
            display: 'inline-block',
          }}
        >
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
        <div
          style={{
            '--theme-bodyBackground': 'cornflowerblue',
            backgroundColor: 'cornflowerblue',
            padding: '1rem',
            display: 'inline-block',
          }}
        >
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
      </div>
      Incorrect (Border should not be visible, unless in Contrast theme):
      <div>
        <div style={{ backgroundColor: 'violet', padding: '1rem', display: 'inline-block' }}>
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
        <div style={{ backgroundColor: 'yellowgreen', padding: '1rem', display: 'inline-block' }}>
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
        <div style={{ backgroundColor: 'orangered', padding: '1rem', display: 'inline-block' }}>
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
        <div style={{ backgroundColor: 'cornflowerblue', padding: '1rem', display: 'inline-block' }}>
          <Avatar name="John Doe (Software Developer)" status={status} />
        </div>
      </div>
    </div>
  );
};

export default AvatarUsageExampleShorthand;
