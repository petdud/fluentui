import * as React from 'react';
import { getNativeElementProps, slot } from '@fluentui/react-utilities';
import type { BreadcrumbItemProps, BreadcrumbItemState } from './BreadcrumbItem.types';
import { useBreadcrumbContext_unstable } from '../Breadcrumb/BreadcrumbContext';

/**
 * Create the state required to render BreadcrumbItem.
 *
 * The returned state can be modified with hooks such as useBreadcrumbItemStyles_unstable,
 * before being passed to renderBreadcrumbItem_unstable.
 *
 * @param props - props from this instance of BreadcrumbItem
 * @param ref - reference to root HTMLElement of BreadcrumbItem
 */
export const useBreadcrumbItem_unstable = (
  props: BreadcrumbItemProps,
  ref: React.Ref<HTMLElement>,
): BreadcrumbItemState => {
  const { size, iconPosition } = useBreadcrumbContext_unstable();
  const { current = false, icon } = props;

  const iconSlot = slot.optional(icon, { elementType: 'span' });
  return {
    components: { root: 'li', icon: 'span' },
    root: slot.always(
      getNativeElementProps('li', {
        ref,
        ...props,
      }),
      { elementType: 'li' },
    ),
    size,
    current,
    icon: iconSlot,
    iconOnly: Boolean(iconSlot?.children && !props.children),
    iconPosition: props.iconPosition || iconPosition,
  };
};
