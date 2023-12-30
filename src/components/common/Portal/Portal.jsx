import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mountNode, setMountNode] = useState(null);

  useLayoutEffect(() => {
    setMountNode(document.body);
  }, []);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};

export default Portal;
