"use client";

import React, { forwardRef } from "react";
import { Flex, ElementType } from "@once-ui-system/core";
import styles from "./Card.module.scss";
import classNames from "classnames";

interface CardProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  fillHeight?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, href, onClick, style, className, fillHeight, ...flex }, ref) => {
    return (
      <ElementType
        ref={ref}
        href={href}
        role={onClick ? "button" : href ? "link" : undefined}
        tabIndex={onClick || href ? 0 : undefined}
        onClick={onClick}
        className={classNames(
          "reset-button-styles",
          "display-flex",
          "fill-width",
          fillHeight && "fill-height",
          "min-width-0",
          (onClick || href) && "focus-ring",
          flex.radius ? `radius-${flex.radius}` : "radius-l",
        )}
      >
        <Flex
          background="surface"
          onBackground="neutral-strong"
          transition="macro-medium"
          border="neutral-medium"
          cursor={onClick || href ? "interactive" : undefined}
          className={classNames(styles.card, className)}
          style={style}
          {...flex}
        >
          {children}
        </Flex>
      </ElementType>
    );
  },
);

Card.displayName = "Card";
export { Card };
