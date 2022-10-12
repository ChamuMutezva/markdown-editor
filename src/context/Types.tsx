export interface ThemeTypes {
    theme: boolean;
    onChangeTheme?: (theme: boolean) => void
} 

export interface ContentTypes {
    ID: string;
    selectContent?: (ID: string) => void
}