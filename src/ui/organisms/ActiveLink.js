import { Link } from "gatsby";
import React from "react";

const ActiveLink = ({
  children,
  href,
  activeClassName = "active",
  ...props
}) => {
  const child = React.Children.only(children);

  let className = child.props.className || "";

  className = `${className} ${activeClassName}`.trim();

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

export default ActiveLink;
