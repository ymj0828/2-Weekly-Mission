import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useLayoutEffect(() => {
    setMountNode(document.body);
  }, []);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};

export default Portal;
