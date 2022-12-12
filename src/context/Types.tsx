export interface ThemeTypes {
    theme: boolean;
    onChangeTheme?: (theme: boolean) => void
}

export interface ContentTypes {
    ID: string;
    selectContent?: (ID: string) => void
}

export interface DataTypes {
    name: string;
    content: string;
    createdAt: string;
    _id?: string;
    updatedAt?: string
}