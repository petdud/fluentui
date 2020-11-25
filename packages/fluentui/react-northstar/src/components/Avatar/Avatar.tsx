import { Accessibility } from '@fluentui/accessibility';
import {
  ComponentWithAs,
  getElementType,
  useUnhandledProps,
  useAccessibility,
  useFluentContext,
  useTelemetry,
} from '@fluentui/react-bindings';
import * as customPropTypes from '@fluentui/react-proptypes';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { makeStyles } from '@fluentui/react-theme-provider';

import { Box, BoxProps } from '../Box/Box';
import { Image, ImageProps } from '../Image/Image';
import { Label, LabelProps } from '../Label/Label';
import { Status, StatusProps } from '../Status/Status';
import { ShorthandValue, FluentComponentStaticProps } from '../../types';
import { createShorthandFactory, UIComponentProps, commonPropTypes, SizeValue, pxToRem } from '../../utils';

const useAvatarStyles = makeStyles([
  [
    null,
    {
      backgroundColor: 'inherit',

      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
    },
  ],

  [{ size: 'smallest' }, { height: pxToRem(20), width: pxToRem(20) }],
  [{ size: 'smaller' }, { height: pxToRem(24), width: pxToRem(24) }],
  [{ size: 'small' }, { height: pxToRem(28), width: pxToRem(28) }],
  [{ size: 'medium' }, { height: pxToRem(32), width: pxToRem(32) }],
  [{ size: 'large' }, { height: pxToRem(44), width: pxToRem(44) }],
  [{ size: 'larger' }, { height: pxToRem(64), width: pxToRem(64) }],
  [{ size: 'largest' }, { height: pxToRem(96), width: pxToRem(96) }],
]);

const useAvatarIconStyles = makeStyles([
  [
    null,
    {
      alignItems: 'center',
      borderRadius: '50%',
      display: 'inline-flex',

      '& > :first-child': {
        margin: '0 auto',

        '& svg': {
          width: '100%',
          height: '100%',
        },
      },
    },
  ],
  [null, tokens => ({ color: tokens.colors.white, background: tokens.colors.brand[600] })],

  [{ square: true }, { borderRadius: pxToRem(3) }],

  [
    { size: 'smallest' },
    { height: pxToRem(20), width: pxToRem(20), '& > :first-child': { height: pxToRem(10), width: pxToRem(10) } },
  ],
  [
    { size: 'smaller' },
    { height: pxToRem(24), width: pxToRem(24), '& > :first-child': { height: pxToRem(12), width: pxToRem(12) } },
  ],
  [
    { size: 'small' },
    { height: pxToRem(28), width: pxToRem(28), '& > :first-child': { height: pxToRem(16), width: pxToRem(16) } },
  ],
  [
    { size: 'medium' },
    { height: pxToRem(32), width: pxToRem(32), '& > :first-child': { height: pxToRem(16), width: pxToRem(16) } },
  ],
  [
    { size: 'large' },
    { height: pxToRem(44), width: pxToRem(44), '& > :first-child': { height: pxToRem(20), width: pxToRem(20) } },
  ],
  [
    { size: 'larger' },
    { height: pxToRem(64), width: pxToRem(64), '& > :first-child': { height: pxToRem(32), width: pxToRem(32) } },
  ],
  [
    { size: 'largest' },
    { height: pxToRem(96), width: pxToRem(96), '& > :first-child': { height: pxToRem(40), width: pxToRem(40) } },
  ],
]);
const useAvatarImageStyles = makeStyles([
  [
    null,
    {
      height: '100%',
      objectFit: 'cover',
      verticalAlign: 'top',
      width: '100%',
    },
  ],
  [{ square: true }, { borderRadius: pxToRem(3) }],
]);

const useAvatarLabelStyles = makeStyles([
  [
    null,
    {
      display: 'inline-block',
      textAlign: 'center',
      padding: '0',
      verticalAlign: 'top',
    },
  ],

  [{ square: true }, { borderRadius: pxToRem(3) }],

  [
    { size: 'smallest' },
    { fontSize: pxToRem(20 / 2.333), lineHeight: pxToRem(20), height: pxToRem(20), width: pxToRem(20) },
  ],
  [
    { size: 'smaller' },
    { fontSize: pxToRem(24 / 2.333), lineHeight: pxToRem(24), height: pxToRem(24), width: pxToRem(24) },
  ],
  [
    { size: 'small' },
    { fontSize: pxToRem(28 / 2.333), lineHeight: pxToRem(28), height: pxToRem(28), width: pxToRem(28) },
  ],
  [
    { size: 'medium' },
    { fontSize: pxToRem(32 / 2.333), lineHeight: pxToRem(32), height: pxToRem(32), width: pxToRem(32) },
  ],
  [
    { size: 'large' },
    { fontSize: pxToRem(44 / 2.333), lineHeight: pxToRem(44), height: pxToRem(44), width: pxToRem(44) },
  ],
  [
    { size: 'larger' },
    { fontSize: pxToRem(64 / 2.333), lineHeight: pxToRem(64), height: pxToRem(64), width: pxToRem(64) },
  ],
  [
    { size: 'largest' },
    { fontSize: pxToRem(96 / 2.333), lineHeight: pxToRem(96), height: pxToRem(96), width: pxToRem(96) },
  ],
]);

const useAvatarStatusStyles = makeStyles([
  [
    null,
    {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  ],
  [null, tokens => ({ boxShadow: `0 0 0 2px ${tokens.bodyBackground}` })],
]);

export interface AvatarProps extends UIComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: Accessibility<never>;

  /** Avatar can contain icon. It will be rendered only if the image is not present. */
  icon?: ShorthandValue<BoxProps>;

  /** Shorthand for the image. */
  image?: ShorthandValue<ImageProps>;

  /** Shorthand for the label. */
  label?: ShorthandValue<LabelProps>;

  /** The name used for displaying the initials of the avatar if the image is not provided. */
  name?: string;

  /** The avatar can have a square shape. */
  square?: boolean;

  /** Size multiplier. */
  size?: SizeValue;

  /** Shorthand for the status of the user. */
  status?: ShorthandValue<StatusProps>;

  /** Custom method for generating the initials from the name property, which is shown if no image is provided. */
  getInitials?: (name: string) => string;
}

export type AvatarStylesProps = Pick<AvatarProps, 'size' | 'square'>;
export const avatarClassName = 'ui-avatar';

/**
 * An Avatar is a graphical representation of a user.
 */
export const Avatar: ComponentWithAs<'div', AvatarProps> & FluentComponentStaticProps<AvatarProps> = props => {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(Avatar.displayName, context.telemetry);
  setStart();

  const { accessibility, className, getInitials, label, icon, image, name, square, size, status } = props;

  const getA11Props = useAccessibility(accessibility, {
    debugName: Avatar.displayName,
    rtl: context.rtl,
  });

  const rootClassName = useAvatarStyles({ size }, avatarClassName, className);
  const iconClassName = useAvatarIconStyles({ square, size });
  const imageClassName = useAvatarImageStyles({ square });
  const labelClassName = useAvatarLabelStyles({ square, size });
  const statusClassName = useAvatarStatusStyles();

  const ElementType = getElementType(props);
  const unhandledProps = useUnhandledProps(Avatar.handledProps, props);

  const imageElement = Image.create(image, {
    defaultProps: () =>
      getA11Props('image', {
        className: imageClassName,
        fluid: true,
        avatar: !square,
        title: name,
      }),
  });

  const iconElement = Box.create(icon, {
    defaultProps: () =>
      getA11Props('icon', {
        className: iconClassName,
        title: name,
      }),
  });

  const labelElement = Label.create(label || {}, {
    defaultProps: () =>
      getA11Props('label', {
        className: labelClassName,
        content: getInitials(name),
        circular: !square,
        title: name,
      }),
  });

  const hasGlyph = !!image || !!icon;

  const result = (
    <ElementType {...getA11Props('root', { className: rootClassName, ...unhandledProps })}>
      {hasGlyph && (imageElement || iconElement)}
      {!hasGlyph && labelElement}
      {Status.create(status, {
        defaultProps: () =>
          getA11Props('status', {
            className: statusClassName,
            size,
          }),
      })}
    </ElementType>
  );

  setEnd();

  return result;
};

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  size: 'medium',
  getInitials(name: string) {
    if (!name) {
      return '';
    }

    const reducedName = name
      .replace(/\s+/g, ' ')
      .replace(/\s*\(.*?\)\s*/g, ' ')
      .replace(/\s*{.*?}\s*/g, ' ')
      .replace(/\s*\[.*?]\s*/g, ' ');

    const initials = reducedName
      .split(' ')
      .filter(item => item !== '')
      .map(item => item.charAt(0))
      .reduce((accumulator, currentValue) => accumulator + currentValue, '');

    if (initials.length > 2) {
      return initials.charAt(0) + initials.charAt(initials.length - 1);
    }
    return initials;
  },
};

Avatar.propTypes = {
  ...commonPropTypes.createCommon({
    children: false,
    content: false,
  }),
  name: PropTypes.string,
  icon: customPropTypes.shorthandAllowingChildren,
  image: customPropTypes.itemShorthandWithoutJSX,
  label: customPropTypes.itemShorthand,
  square: PropTypes.bool,
  size: customPropTypes.size,
  status: customPropTypes.itemShorthand,
  getInitials: PropTypes.func,
};
Avatar.handledProps = Object.keys(Avatar.propTypes) as any;

Avatar.create = createShorthandFactory({ Component: Avatar, mappedProp: 'name' });
