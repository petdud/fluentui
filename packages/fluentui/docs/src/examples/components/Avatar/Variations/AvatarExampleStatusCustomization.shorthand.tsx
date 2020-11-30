import * as React from 'react';
import { Avatar, Grid, makeStyles, Text } from '@fluentui/react-northstar';
import { AcceptIcon } from '@fluentui/react-icons-northstar';

const useStatusOverrides = makeStyles([[null, { backgroundColor: 'green' }]]);

const AvatarExampleStatusCustomizationShorthand = () => (
  <Grid
    columns="50% 50px 50px"
    styles={{ justifyContent: 'start', justifyItems: 'start', gap: '10px', alignItems: 'center' }}
  >
    <Text content="Status can receive variables." />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
      }}
    />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
      }}
      style={{ '--theme-bodyBackground': 'orange' }}
    />
    <Text content="Avatar and its status are proportionate (share the same size value) by default." />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
      }}
    />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      size="larger"
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
      }}
    />
    <Text content="Status can have different size for the same avatar size." />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
      }}
    />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
        size: 'larger',
      }}
    />
    <Text content="Status can have same size for different avatar sizes." />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
      }}
    />
    <Avatar
      image={{
        src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/matt.jpg',
        alt: 'Profile picture of Matt',
      }}
      size="larger"
      status={{
        className: useStatusOverrides(),
        icon: <AcceptIcon />,
        title: 'Available',
        size: 'medium',
      }}
    />
  </Grid>
);

export default AvatarExampleStatusCustomizationShorthand;
