export interface ThemeTypes {
    theme: boolean;
    onChangeTheme?: (theme: boolean) => void
}

export interface ContentTypes {
    ID: string;
    title?: string;
    setTitle?: (title: string) => void;
    markdownContent?: string;
    setMarkdownContent?: (markdownContent: string) => void;
    changeContent?: (ID: string) => void
}

export interface DataTypes {
    name: string;
    content: string;
    createdAt: string;
    _id?: string;
    updatedAt?: string
}