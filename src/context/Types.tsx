export interface ThemeTypes {
    theme: boolean;
    onChangeTheme?: (theme: boolean) => void
}

export interface ToggleTypes {
    toggleMenu: boolean;
    onChangeToggleMenu?: (toggleMenu: boolean) => void
}

export interface ContentTypes {
    ID: string;
    changeContent?: (ID: string) => void;
    title?: string;
    setTitle?: (title: string) => void;
    markdownContent?: string;
    setMarkdownContent?: (markdownContent: string) => void;
    data?: any;
    fetchStatus: string;
    setData?: (data: any) => void;
}

export interface DataTypes {
    name: string;
    content: string;
    createdAt: string;
    _id?: string;
    updatedAt?: string
}