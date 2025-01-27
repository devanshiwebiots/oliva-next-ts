import { ApexOptions } from "apexcharts";
import { AttributionControlProps, ZoomControlProps } from "react-leaflet";

export interface TotalEarningCardProp {
    colClass?: string;
}

export interface CommonHeaderWithDropdownProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    headingClass?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
    topDivClass?: string;
}

export interface CustomerCardDataProps {
    id: number;
    color: string;
    divClass: string;
    title: string;
    rate: string;
    icon: string;
    percent: number;
    bodyClass?: string;
}

export interface CustomerCardMainProp {
    data: CustomerCardDataProps[];
}

interface SeriesItem {
    name: string;
    data: number[];
}

interface ChartItems {
    series: SeriesItem[];
    height?: number | undefined;
}

export interface OnlineOrderCardTypes {
    id: number;
    colClass: string;
    headerClass: string;
    color: string;
    icon: string;
    arrowColor: string;
    percent: string;
    text: string;
    rate: string;
    chart: ChartItems;
    chartClass?: string;
}

export interface OnlineOrderMainProp {
    data: OnlineOrderCardTypes[];
}

export interface TotalEarningCardProp {
    colClass?: string;
}

export interface CommonHeaderWithDropdownProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    headingClass?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
}

export interface RecentOrderTableProps {
    [key: string]: string | number;
    id: number;
    productImage: string;
    productName: string;
    productCode: string;
    customerName: string;
    customerCode: string;
    date: string;
    statusColor: string
    statusText: string;
    total: string
}

export interface CustomComponentProps {
    src?: string;
    name?: string;
    text?: string;
    color?: string;
    value?: number;
}


interface CommentItems {
    id: number;
    icon: string;
    spanText: string;
}

interface CustomerItems {
    id: number;
    image: string;
}

interface WebCardData {
    id: number;
    divClass?: string;
    color: string;
    icon: string;
    title: string;
    text: string;
    comment: CommentItems[];
    customers: CustomerItems[];
    progressValue: number;
}

export interface WebCardProps {
    item: WebCardData;
}

export interface CustomApexOptions extends ApexOptions {
    dropShadow: {
        enabled: boolean;
        top: number;
        left: number;
        bottom: number;
        blur: number;
        color: string;
        opacity: number;
    };
}

export interface TableHeadType {
    class?: string;
    name: string;
}

export interface TableHeaderProp {
    headData: TableHeadType[]
}

export interface GrossCategoriesType {
    id: number;
    image: string;
    product: string;
    orderId: string;
    date: string;
    amount: string;
    status: string;
    quantity: string;
    statusColor: string;
}

export interface FilterComponentProps {
    onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterText: string;
}

export interface ProductOrderTypes {
    id: number,
    image: string;
    product: string;
    subText: string;
    date: string;
    stock: string;
    chart: any;
    rate: string;
    badgeColor: string;
    badge: string;
}

export interface Position {
    lat: number;
    lng: number;
}
export interface CustomMapProps {
    center: Position;
    zoom: number;
    maxZoom?: number;
    minZoom?: number;
    attributionControl?: AttributionControlProps;
    zoomControl?: ZoomControlProps;
    doubleClickZoom?: boolean;
    scrollWheelZoom?: boolean;
    dragging?: boolean;
    easeLinearity?: number;
}