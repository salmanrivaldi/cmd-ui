// data/menus.ts
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
    faHouse,
    faCalendarAlt,
    faHeart,
    faSyringe,
    faChartColumn,
    faUsers,
    faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

interface Submenu {
    label: string;
    url: string;
}

interface Menu {
    label: string;
    url?: string;
    icon: IconDefinition; // Use IconDefinition for the icon type
    submenus?: Submenu[];
}

export const menus: Menu[] = [
    {
        label: "Dashboard",
        url: "/",
        icon: faHouse,
    },
    {
        label: "Reservasi",
        icon: faCalendarAlt,
        submenus: [
            { label: "Data Tes HIV", url: "/reservasi/tes-hiv" },
            { label: "Data PrEP", url: "/reservasi/prep" },
            { label: "Data Refill ARV", url: "/reservasi/refill-arv" },
            { label: "Data Viral Load", url: "/reservasi/viral-load" },
        ],
    },
    {
        label: "Notifikasi Pasangan",
        icon: faHeart,
        submenus: [
            { label: "Tautan Referal", url: "/np/referal" },
            { label: "Data Semua", url: "/np/semua" },
            { label: "Data NP Layanan", url: "/np/layanan" },
            { label: "Data NP Komunitas", url: "/np/komunitas" },
        ],
    },
    {
        label: "Skrining HIV Mandiri",
        url: "/skrining-hiv-mandiri",
        icon: faSyringe,
    },
    {
        label: "Info PrEP",
        url: "/info-prep",
        icon: faCalendarAlt,
    },
    {
        label: "Cascade",
        icon: faChartColumn,
        submenus: [
            { label: "Total", url: "/cascade/total" },
            { label: "Tes HIV", url: "/cascade/tes-hiv" },
            { label: "PrEP", url: "/cascade/prep" },
            { label: "Refill ARV", url: "/cascade/refill-arv" },
            { label: "Viral Load", url: "/cascade/viral-load" },
        ],
    },
    {
        label: "Users",
        url: "/users",
        icon: faUsers,
    },
    {
        label: "Pengaturan",
        icon: faScrewdriverWrench,
        submenus: [{ label: "Fasyankes", url: "/pengaturan/fasyankes" }],
    },
];
