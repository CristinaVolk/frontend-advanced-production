import { ThemeEnum } from '@/shared/const/theme';

export interface JsonSettings {
    theme?: ThemeEnum;
    isFirstVisit?: boolean;
    hasSettingsPageBeenOpened?: boolean;
}
