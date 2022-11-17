import React from 'react';

export interface SideBarItemType {
  path: string;
  text: string;
  authOnly?: boolean;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
