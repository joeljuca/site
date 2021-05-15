export const A = ({ children, href, ...props }) => {
  props = Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      if (key === "blank" && value) {
        return ["target", "_blank"];
      }

      return [key, value];
    })
  );

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};
