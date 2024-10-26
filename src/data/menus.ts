// data/menus.ts
import { faScrewdriverWrench, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
    faHouse,
    faCalendarAlt,
    faHeart,
    faSyringe,
    faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

interface Submenu {
    label: string;
    url?: string; // URL optional, to allow submenus without direct links
    submenus?: Submenu[]; // Allow submenus in the Submenu interface
}

interface Menu {
    label: string;
    url?: string; // URL optional for top-level menus
    icon: IconDefinition; // Use IconDefinition for the icon type
    submenus?: Submenu[]; // Allow submenus in the Menu interface
}

export const menus: Menu[] = [
    {
        label: "Dashboard",
        url: "/",
        icon: faHouse,
    },
    {
        label: "Pencatatan",
        icon: faCalendarAlt,
        submenus: [
            { label: "Form 1", url: "/pencatatan/form-1" },
            { label: "Form 1A", url: "/pencatatan/form-1a" },
            { label: "Form 2", url: "/pencatatan/form-2" },
            { label: "Form 3", url: "/pencatatan/form-3" },
            { label: "Form 4A", url: "/pencatatan/form-4a" },
            { label: "Form 4B", url: "/pencatatan/form-4b" },
            { label: "Form 4C", url: "/pencatatan/form-4c" },
            { label: "Form 5A", url: "/pencatatan/form-5a" },
            { label: "Form 5B", url: "/pencatatan/form-5b" },
            { label: "Form 6", url: "/pencatatan/form-6" },
            { label: "Form 7", url: "/pencatatan/form-7" },
            { label: "Form 7B", url: "/pencatatan/form-7b" },
            { label: "Form 8", url: "/pencatatan/form-8" },
            { label: "Form Terminasi", url: "/pencatatan/form-terminasi" },
            { label: "Form Transisi", url: "/pencatatan/form-transisi" },
            { label: "Form Edit", url: "/pencatatan/form-edit" },
        ],
    },
    {
        label: "Pra Laporan",
        icon: faHeart,
        submenus: [
            {
                label: "Data Record",
                submenus: [
                    { label: "Form 1", url: "/pl/data-record/form-1" },
                    { label: "Form 1A", url: "/pl/data-record/form-1a" },
                    { label: "Form 2", url: "/pl/data-record/form-2" },
                    { label: "Form 3", url: "/pl/data-record/form-3" },
                    { label: "Form 4A", url: "/pl/data-record/form-4a" },
                    { label: "Form 4B", url: "/pl/data-record/form-4b" },
                    { label: "Form 4C", url: "/pl/data-record/form-4c" },
                    { label: "Form 5A", url: "/pl/data-record/form-5a" },
                    { label: "Form 5B", url: "/pl/data-record/form-5b" },
                    { label: "Form 6", url: "/pl/data-record/form-6" },
                    { label: "Form 7", url: "/pl/data-record/form-7" },
                    { label: "Form 7B", url: "/pl/data-record/form-7b" },
                    { label: "Form 8", url: "/pl/data-record/form-8" },
                    { label: "Form Terminasi", url: "/pl/data-record/form-terminasi" },
                    { label: "Form Transisi", url: "/pl/data-record/form-transisi" },
                    { label: "Form Edit", url: "/pl/data-record/form-edit" },
                ],
            },
            {
                label: "Tabel Tracker",
                submenus: [
                    { label: "Reached", url: "/pl/tabel-tracker/reached" },
                    { label: "Eligible", url: "/pl/tabel-tracker/eligible" },
                    { label: "Tested", url: "/pl/tabel-tracker/tested" },
                    { label: "New PLHIV", url: "/pl/tabel-tracker/new-plhiv" },
                    { label: "Registered", url: "/pl/tabel-tracker/registered" },
                    { label: "Initiated ART", url: "/pl/tabel-tracker/initiated-art" },
                    { label: "Case managed", url: "/pl/tabel-tracker/case-managed" },
                    { label: "Index testing", url: "/pl/tabel-tracker/index-testing" },
                    { label: "Client retained", url: "/pl/tabel-tracker/client-retained" },
                    { label: "Viral load", url: "/pl/tabel-tracker/viral-load" },
                    { label: "Eligible VL", url: "/pl/tabel-tracker/eligible-vl" },
                    { label: "(Re) Inisiasi", url: "/pl/tabel-tracker/re-inisiasi" },
                ],
            },
            {
                label: "Performance Tracker",
                submenus: [
                    { label: "Case finding", url: "/pl/performance-tracker/case-finding" },
                    { label: "Case management", url: "/pl/performance-tracker/case-management" },
                    { label: "Retained, VL & (Re) initiated", url: "/pl/performance-tracker/retained-vl-re-initiated" },
                ],
            },
            {
                label: "Performance Tracker FY 22",
                submenus: [
                    { label: "Case finding", url: "/pl/performance-tracker-fy22/case-finding" },
                    { label: "Case management", url: "/pl/performance-tracker-fy22/case-management" },
                ],
            },
            {
                label: "Performance Tracker Q3-Q4 FY22",
                submenus: [
                    { label: "A. Case Finding", url: "/pl/performance-tracker-q3-q4-fy22/case-finding" },
                    { label: "B. HIV/TB", url: "/pl/performance-tracker-q3-q4-fy22/hiv-tb" },
                    { label: "C. Notifikasi Pasangan", url: "/pl/performance-tracker-q3-q4-fy22/notifikasi-pasangan" },
                    { label: "D. Skrining HIV", url: "/pl/performance-tracker-q3-q4-fy22/skrining-hiv" },
                    { label: "E. Case Management", url: "/pl/performance-tracker-q3-q4-fy22/case-management" },
                    { label: "F. Adverse Event", url: "/pl/performance-tracker-q3-q4-fy22/adverse-event" },
                ],
            },
            { label: "Data PN Faskes", url: "/pl/data-pn-faskes" },
            { label: "Laporan Skrining", url: "/pl/laporan-skrining" },
            { label: "Laporan Skrining berbasis Komunitas", url: "/pl/laporan-skrining-komunitas" },
        ],
    },
    {
        label: "Report FY24",
        icon: faSyringe,
        submenus: [
            { label: "Performance Tracker", url: "/rf/performance-tracker" },
        ],
    },
    {
        label: "Analisis",
        icon: faCalendarAlt,
        submenus: [
            {
                label: "Coverage Dashboard",
                submenus: [
                    { label: "Form 1", url: "/analisis/coverage-dashboard/form-1" },
                    { label: "Form 2", url: "/analisis/coverage-dashboard/form-2" },
                    { label: "Form 3", url: "/analisis/coverage-dashboard/form-3" },
                    { label: "Form 4A", url: "/analisis/coverage-dashboard/form-4a" },
                    { label: "Form 4B", url: "/analisis/coverage-dashboard/form-4b" },
                    { label: "Form 4C", url: "/analisis/coverage-dashboard/form-4c" },
                    { label: "Form 5", url: "/analisis/coverage-dashboard/form-5" },
                    { label: "Form 6", url: "/analisis/coverage-dashboard/form-6" },
                    { label: "Form 7", url: "/analisis/coverage-dashboard/form-7" },
                ],
            },
            {
                label: "Performance Dashboard",
                submenus: [
                    { label: "Performance Dashboard", url: "/analisis/performance-dashboard/performance" },
                    { label: "Outreach Dashboard", url: "/analisis/performance-dashboard/outreach" },
                ],
            },
            {
                label: "Outcome Dashboard",
                submenus: [
                    { label: "Outcome Dashboard", url: "/analisis/outcome-dashboard" },
                ],
            },
        ],
    },
    {
        label: "TB Report & Analysis",
        icon: faChartColumn,
        submenus: [
            { label: "TB Community", url: "/cascade/tb-community" },
            {
                label: "TB Screening Chart",
                submenus: [
                    { label: "Among KPs", url: "/cascade/tb-screening-chart/among-kps" },
                    { label: "Among PLHIV", url: "/cascade/tb-screening-chart/among-plhiv" },
                ],
            },
            { label: "HIV-TB Cascade", url: "/cascade/hiv-tb-cascade" },
            { label: "TPT Cascade", url: "/cascade/tpt-cascade" },
        ],
    },
    {
        label: "Data Kuartal",
        icon: faSyringe,
        submenus: [
            { label: "PN Community", url: "/dk/pn-community" },
        ],
    },
    {
        label: "Pengaturan",
        icon: faScrewdriverWrench
    },
];
