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
                    { label: "Form 1", url: "/pra-laporan/data-record/form-1" },
                    { label: "Form 1A", url: "/pra-laporan/data-record/form-1a" },
                    { label: "Form 2", url: "/pra-laporan/data-record/form-2" },
                    { label: "Form 3", url: "/pra-laporan/data-record/form-3" },
                    { label: "Form 4A", url: "/pra-laporan/data-record/form-4a" },
                    { label: "Form 4B", url: "/pra-laporan/data-record/form-4b" },
                    { label: "Form 4C", url: "/pra-laporan/data-record/form-4c" },
                    { label: "Form 5A", url: "/pra-laporan/data-record/form-5a" },
                    { label: "Form 5B", url: "/pra-laporan/data-record/form-5b" },
                    { label: "Form 6", url: "/pra-laporan/data-record/form-6" },
                    { label: "Form 7", url: "/pra-laporan/data-record/form-7" },
                    { label: "Form 7B", url: "/pra-laporan/data-record/form-7b" },
                    { label: "Form 8", url: "/pra-laporan/data-record/form-8" },
                    { label: "Form Terminasi", url: "/pra-laporan/data-record/form-terminasi" },
                    { label: "Form Transisi", url: "/pra-laporan/data-record/form-transisi" },
                    { label: "Form Edit", url: "/pra-laporan/data-record/form-edit" },
                ],
            },
            {
                label: "Tabel Tracker",
                submenus: [
                    { label: "Reached", url: "/pra-laporan/tabel-tracker/reached" },
                    { label: "Eligible", url: "/pra-laporan/tabel-tracker/eligible" },
                    { label: "Tested", url: "/pra-laporan/tabel-tracker/tested" },
                    { label: "New PRA-LAPORANHIV", url: "/pra-laporan/tabel-tracker/new-pra-laporanhiv" },
                    { label: "Registered", url: "/pra-laporan/tabel-tracker/registered" },
                    { label: "Initiated ART", url: "/pra-laporan/tabel-tracker/initiated-art" },
                    { label: "Case managed", url: "/pra-laporan/tabel-tracker/case-managed" },
                    { label: "Index testing", url: "/pra-laporan/tabel-tracker/index-testing" },
                    { label: "Client retained", url: "/pra-laporan/tabel-tracker/client-retained" },
                    { label: "Viral load", url: "/pra-laporan/tabel-tracker/viral-load" },
                    { label: "Eligible VL", url: "/pra-laporan/tabel-tracker/eligible-vl" },
                    { label: "(Re) Inisiasi", url: "/pra-laporan/tabel-tracker/re-inisiasi" },
                ],
            },
            {
                label: "Performance Tracker",
                submenus: [
                    { label: "Case finding", url: "/pra-laporan/performance-tracker/case-finding" },
                    { label: "Case management", url: "/pra-laporan/performance-tracker/case-management" },
                    { label: "Retained, VL & (Re) initiated", url: "/pra-laporan/performance-tracker/retained-vl-re-initiated" },
                ],
            },
            {
                label: "Performance Tracker FY 22",
                submenus: [
                    { label: "Case finding", url: "/pra-laporan/performance-tracker-fy22/case-finding" },
                    { label: "Case management", url: "/pra-laporan/performance-tracker-fy22/case-management" },
                ],
            },
            {
                label: "Performance Tracker Q3-Q4 FY22",
                submenus: [
                    { label: "A. Case Finding", url: "/pra-laporan/performance-tracker-q3-q4-fy22/case-finding" },
                    { label: "B. HIV/TB", url: "/pra-laporan/performance-tracker-q3-q4-fy22/hiv-tb" },
                    { label: "C. Notifikasi Pasangan", url: "/pra-laporan/performance-tracker-q3-q4-fy22/notifikasi-pasangan" },
                    { label: "D. Skrining HIV", url: "/pra-laporan/performance-tracker-q3-q4-fy22/skrining-hiv" },
                    { label: "E. Case Management", url: "/pra-laporan/performance-tracker-q3-q4-fy22/case-management" },
                    { label: "F. Adverse Event", url: "/pra-laporan/performance-tracker-q3-q4-fy22/adverse-event" },
                ],
            },
            { label: "Data PN Faskes", url: "/pra-laporan/data-pn-faskes" },
            { label: "Laporan Skrining", url: "/pra-laporan/laporan-skrining" },
            { label: "Laporan Skrining berbasis Komunitas", url: "/pra-laporan/laporan-skrining-komunitas" },
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
                    { label: "Among PRA-LAPORANHIV", url: "/cascade/tb-screening-chart/among-pra-laporanhiv" },
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
