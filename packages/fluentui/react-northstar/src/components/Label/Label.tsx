import { Accessibility } from '@fluentui/accessibility';
import {
  ComponentWithAs,
  getElementType,
  useUnhandledProps,
  useAccessibility,
  useFluentContext,
  useStyles,
  useTelemetry,
} from '@fluentui/react-bindings';
import * as customPropTypes from '@fluentui/react-proptypes';
import { makeStyles } from '@fluentui/react-theme-provider';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import {
  childrenExist,
  createShorthandFactory,
  UIComponentProps,
  ChildrenComponentProps,
  ContentComponentProps,
  commonPropTypes,
  ColorComponentProps,
  rtlTextContainer,
  pxToRem,
} from '../../utils';

import { Image, ImageProps } from '../Image/Image';
import { Box, BoxProps } from '../Box/Box';

import { ShorthandValue, FluentComponentStaticProps } from '../../types';
import { ICSSInJSStyle } from '@fluentui/styles';

export interface LabelProps
  extends UIComponentProps,
    ChildrenComponentProps,
    ContentComponentProps<ShorthandValue<BoxProps>>,
    ColorComponentProps {
  /**
   * Accessibility behavior if overridden by the user.
   */
  accessibility?: Accessibility<never>;

  /** A Label can be circular. */
  circular?: boolean;

  /** A Label can take up the width of its container. */
  fluid?: boolean;

  /** A Label can have an icon. */
  icon?: ShorthandValue<BoxProps>;

  /** A Label can position its Icon at the start or end of the layout. */
  iconPosition?: 'start' | 'end';

  /** A Label can contain an image. */
  image?: ShorthandValue<ImageProps>;

  /** A Label can position its image at the start or end of the layout. */
  imagePosition?: 'start' | 'end';
}

export type LabelStylesProps = Pick<LabelProps, 'circular' | 'color' | 'imagePosition' | 'iconPosition'> & {
  hasImage: boolean;
  hasIcon: boolean;
  hasActionableIcon: boolean;
};
export const labelClassName = 'ui-label';

const useLabelStyles = makeStyles([
  [
    null,
    {
      alignItems: 'center',
      display: 'inline-flex',
      overflow: 'hidden',

      height: pxToRem(16),
      lineHeight: pxToRem(16),

      backgroundColor: 'rgb(232, 232, 232)',
      color: 'rgba(0, 0, 0, 0.6)',

      fontSize: pxToRem(14),
      borderRadius: pxToRem(3),
      padding: `0 ${pxToRem(4)} 0 ${pxToRem(4)}`,
    },
  ],

  [{ hasImage: true }, { paddingRight: '0px' }],
  [{ hasImage: true, imagePosition: 'start' }, { paddingLeft: '0px' }],

  [{ circular: true }, { borderRadius: pxToRem(9999) }],
]);

const useLabelContentStyles = makeStyles([
  [{ hasStartElement: true }, { marginLeft: pxToRem(3) }],
  [{ hasEndElement: true }, { marginRight: pxToRem(3) }],
]);

const useLabelIconStyles = makeStyles([
  [
    null,
    {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',

      width: pxToRem(16),
      height: pxToRem(16),

      '& > :first-child': {
        height: '100%',
        width: '100%',

        '& svg': { height: '100%', width: '100%' },
      },
    },
  ],
  [{ hasActionableIcon: true }, { cursor: 'pointer' }],
]);

const useLabelImageStyles = makeStyles([[null, { height: pxToRem(20), width: pxToRem(20) }]]);

/**
 * A Label allows user to classify content.
 */
export const Label: ComponentWithAs<'span', LabelProps> & FluentComponentStaticProps = props => {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(Label.displayName, context.telemetry);
  setStart();

  const {
    accessibility,
    children,
    circular,
    className,
    color,
    content,
    icon,
    iconPosition,
    image,
    imagePosition,
  } = props;

  const getA11Props = useAccessibility(accessibility, {
    debugName: Label.displayName,
    rtl: context.rtl,
  });

  const hasImage = !!image;
  const hasIcon = !!icon;

  const rootClassName = useLabelStyles({ color, hasImage, circular, imagePosition }, labelClassName, className);
  const contentClassName = useLabelContentStyles({
    hasStartElement: (hasImage && imagePosition === 'start') || (hasIcon && iconPosition === 'start'),
    hasEndElement: (hasImage && imagePosition === 'end') || (hasIcon && iconPosition === 'end'),
  });
  const iconClassName = useLabelIconStyles({ hasActionableIcon: _.has(icon, 'onClick') });
  const imageClassName = useLabelImageStyles();

  const ElementType = getElementType(props);
  const unhandledProps = useUnhandledProps(Label.handledProps, props);

  if (childrenExist(children)) {
    const element = (
      <ElementType
        {...getA11Props('root', {
          className: rootClassName,
          ...rtlTextContainer.getAttributes({ forElements: [children] }),
          ...unhandledProps,
        })}
      >
        {children}
      </ElementType>
    );
    setEnd();

    return element;
  }

  const imageElement = Image.create(image, {
    defaultProps: () => ({ className: imageClassName }),
  });
  const iconElement = Box.create(icon, {
    defaultProps: () => ({ className: iconClassName }),
  });
  const contentElement = Box.create(content, {
    defaultProps: () => ({ className: contentClassName }),
  });

  const startImage = imagePosition === 'start' && imageElement;
  const startIcon = iconPosition === 'start' && iconElement;
  const endIcon = iconPosition === 'end' && iconElement;
  const endImage = imagePosition === 'end' && imageElement;

  const element = (
    <ElementType
      {...getA11Props('root', {
        className: rootClassName,
        ...unhandledProps,
      })}
    >
      {startImage}
      {startIcon}
      {contentElement}
      {endIcon}
      {endImage}
    </ElementType>
  );
  setEnd();

  return element;
};

Label.displayName = 'Label';

Label.propTypes = {
  ...commonPropTypes.createCommon({ color: true, content: 'shorthand' }),
  circular: PropTypes.bool,
  icon: customPropTypes.shorthandAllowingChildren,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  image: customPropTypes.itemShorthandWithoutJSX,
  imagePosition: PropTypes.oneOf(['start', 'end']),
  fluid: PropTypes.bool,
};
Label.handledProps = Object.keys(Label.propTypes) as any;

Label.defaultProps = {
  as: 'span',
  imagePosition: 'start',
  iconPosition: 'end',
};

Label.create = createShorthandFactory({ Component: Label, mappedProp: 'content' });
