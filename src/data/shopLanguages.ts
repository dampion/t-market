// application
import { ILanguage } from '~/interfaces/language';

const dataShopLanguages: ILanguage[] = [
    {
        locale: 'en',
        code: 'en',
        name: 'English',
        icon: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/languages/language-1.png',
        direction: 'ltr',
    },
    {
        locale: 'ru',
        code: 'ru',
        name: 'Russian',
        icon: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/languages/language-2.png',
        direction: 'ltr',
    },
    {
        locale: 'ar',
        code: 'ar',
        name: 'RTL',
        icon: 'https://red-parts.react.themeforest.scompiler.ru/themes/red/images/languages/language-3.png',
        direction: 'rtl',
    },
];

export const dataShopDefaultLocale = 'en';

export default dataShopLanguages;
