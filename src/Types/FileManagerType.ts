export interface FileContentData {
    id: number;
    name: string;
    size: string;
    modify: string;
    icon: string;
    folderClass: string;
    title: string
    folderSize: string
    modifyFolder: string;
}

export interface FileManagerSliceType {
    myFile: FileContentData[]
    searchTerm: string;
    fileSidebar: boolean;
}

export interface FileMainContentPropsType {
    fileList: FileContentData[];
}

export interface FileListPropsType {
    myFile: FileContentData[];
}