import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export interface SidebarItem {
  id: number;
  outlineIcon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  solidIcon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
  link: string;
  active: boolean;
}
