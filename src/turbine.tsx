import type { FC } from 'react';
import { useMemo } from 'react';

type ElementsWithClass = {
  [K in keyof JSX.IntrinsicElements]: Extract<JSX.IntrinsicElements[K], { className?: string | undefined }>;
};

/**
 * Build a turbine component based a the `T` HTML tag.
 * @param {T} As The HTML tag.
 * @param {string} className The class to apply.
 * @param {Omit<JSX.IntrinsicElements[T], "className">} defaultProps The default props to pass to the component.
 * @returns {React.FC<JSX.IntrinsicElements[T]>} The "turbine" component.
 *
 * @example Bootstrap-like cards:
 *   const Card = turbine('div', 'px-6 py-4 rounded bg-grey-200');
 *   export default Card
 */
export default function turbine<T extends keyof ElementsWithClass>(
  As: T,
  className: string,
  defaultProps?: Omit<ElementsWithClass[T], 'className'>,
): FC<ElementsWithClass[T]> {
  const inner: FC<ElementsWithClass[T]> = ({ className: classNameProp, ...props }) => {
    // Merge the two class definitions.
    // We chose to not use the famous `classnames` package here since the merge is fairly simple.
    const mergedClassNames = useMemo(() => {
      return `${className} ${classNameProp ?? ''}`.trim().replace(/ +/, ' ');
    }, [classNameProp]);

    // @ts-ignore Too complex for TypeScript, but it's good, trust us!
    return <As {...defaultProps} {...props} className={mergedClassNames} />;
  };

  inner.displayName = `pure_${As}`;

  return inner;
}
