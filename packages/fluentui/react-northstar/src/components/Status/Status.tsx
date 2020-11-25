import { Accessibility, statusBehavior, StatusBehaviorProps } from '@fluentui/accessibility';
import {
  ComponentWithAs,
  getElementType,
  useUnhandledProps,
  useAccessibility,
  useTelemetry,
  useFluentContext,
} from '@fluentui/react-bindings';
import * as customPropTypes from '@fluentui/react-proptypes';
import { makeStyles } from '@fluentui/react-theme-provider';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { createShorthandFactory, UIComponentProps, commonPropTypes, SizeValue, pxToRem } from '../../utils';
import { ShorthandValue, FluentComponentStaticProps } from '../../types';
import { Box, BoxProps } from '../Box/Box';

export interface StatusProps extends UIComponentProps {
  /** Accessibility behavior if overridden by the user. */
  accessibility?: Accessibility<StatusBehaviorProps>;

  /** A custom color. */
  color?: string;

  /** Shorthand for the icon, to provide customizing status */
  icon?: ShorthandValue<BoxProps>;

  /** Size multiplier */
  size?: SizeValue;

  /** The pre-defined state values which can be consumed directly. */
  state?: 'success' | 'info' | 'warning' | 'error' | 'unknown';
}

export type StatusStylesProps = Pick<StatusProps, 'color' | 'size' | 'state'>;
export const statusClassName = 'ui-status';

const useStatusStyles = makeStyles([
  [
    null,
    {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',
      verticalAlign: 'middle',

      borderRadius: '9999px',
    },
  ],
  [null, tokens => ({ backgroundColor: tokens.colorScheme.default.background5 })],

  [{ state: 'success' }, tokens => ({ backgroundColor: tokens.colorScheme.green.background })],
  [{ state: 'info' }, tokens => ({ backgroundColor: tokens.colorScheme.brand.background })],
  [{ state: 'warning' }, tokens => ({ backgroundColor: tokens.colorScheme.yellow.background })],
  [{ state: 'error' }, tokens => ({ backgroundColor: tokens.colorScheme.red.background })],

  [{ size: 'smallest' }, { width: pxToRem(8), height: pxToRem(8) }],
  [{ size: 'smaller' }, { width: pxToRem(8), height: pxToRem(8) }],
  [{ size: 'small' }, { width: pxToRem(8), height: pxToRem(8) }],
  [{ size: 'medium' }, { width: pxToRem(10), height: pxToRem(10) }],
  [{ size: 'large' }, { width: pxToRem(12), height: pxToRem(12) }],
  [{ size: 'larger' }, { width: pxToRem(14), height: pxToRem(14) }],
  [{ size: 'largest' }, { width: pxToRem(16), height: pxToRem(16) }],
]);

const useStatusIconStyles = makeStyles([
  [
    null,
    {
      alignItems: 'center',
      display: 'inline-flex',
      justifyContent: 'center',

      width: pxToRem(7),
      height: pxToRem(7),

      '& > :first-child': {
        height: '100%',
        width: '100%',

        '& svg': {
          height: '100%',
          width: '100%',
        },
      },
    },
  ],
  [null, tokens => ({ color: tokens.colorScheme.default.foreground4 })],

  [{ state: 'success' }, tokens => ({ color: tokens.colorScheme.green.foreground1 })],
  [{ state: 'info' }, tokens => ({ color: tokens.colorScheme.default.foreground2 })],
  [{ state: 'warning' }, tokens => ({ color: tokens.colorScheme.yellow.foreground2 })],
  [{ state: 'error' }, tokens => ({ color: tokens.colorScheme.red.foreground2 })],
]);

/**
 * A Status represents someone's or something's state.
 *
 * @accessibility
 * Implements [ARIA img](https://www.w3.org/TR/wai-aria-1.1/#img) role.
 */
export const Status: ComponentWithAs<'span', StatusProps> & FluentComponentStaticProps = props => {
  const context = useFluentContext();
  const { setStart, setEnd } = useTelemetry(Status.displayName, context.telemetry);
  setStart();

  const { className, icon, size, state } = props;

  const rootClassName = useStatusStyles({ size, state }, statusClassName, className);
  const iconClassName = useStatusIconStyles({ size, state });

  const getA11Props = useAccessibility(props.accessibility, {
    debugName: Status.displayName,
    rtl: context.rtl,
  });
  const ElementType = getElementType(props);
  const unhandledProps = useUnhandledProps(Status.handledProps, props);

  const iconElement = Box.create(icon, {
    defaultProps: () =>
      getA11Props('icon', {
        className: iconClassName,
        as: 'span',
      }),
  });

  const element = (
    <ElementType {...getA11Props('root', { className: rootClassName, ...unhandledProps })}>{iconElement}</ElementType>
  );
  setEnd();

  return element;
};

Status.displayName = 'Status';
Status.propTypes = {
  ...commonPropTypes.createCommon({
    children: false,
    content: false,
  }),
  color: PropTypes.string,
  icon: customPropTypes.shorthandAllowingChildren,
  size: customPropTypes.size,
  state: PropTypes.oneOf(['success', 'info', 'warning', 'error', 'unknown']),
};
Status.handledProps = Object.keys(Status.propTypes) as any;
Status.defaultProps = {
  accessibility: statusBehavior,
  as: 'span',
  size: 'medium',
  state: 'unknown',
};

Status.create = createShorthandFactory({ Component: Status, mappedProp: 'state' });
