import { IconType } from "react-icons/lib";

export interface Submenu {
    label: string;
    url?: string; // URL optional, to allow submenus without direct links
    submenus?: Submenu[]; // Allow submenus in the Submenu interface
}

export interface Menu {
    label: string;
    url?: string; // URL optional for top-level menus
    icon: IconType; // Use IconDefinition for the icon type
    submenus?: Submenu[]; // Allow submenus in the Menu interface
}

export interface MenuItemProps {
    menu: Menu;
    index: number;
    isActive: boolean;
    openMenu: number | null;
    toggleSubmenu: (index: number) => void;
    isCollapsed: boolean;
}

export interface SubmenuItemProps {
    submenu: Submenu;
    subIndex: number;
    openSubmenu: number | null;
    toggleSubSubmenu: (index: number) => void;
    pathname: string;
    isCollapsed: boolean;
}

export interface SubSubmenuItemProps {
    subsubmenu: Submenu;
    openSubmenu: number | null;
    subIndex: number;
    isCollapsed: boolean;
}
