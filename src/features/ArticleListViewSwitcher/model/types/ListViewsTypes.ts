import ListIconDeprecated from '@/shared/assets/icons/list-icon.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TileIconDeprecated from '@/shared/assets/icons/tile-icon.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { ArticleView } from '@/entities/Article';
import { toggleFeatures } from '@/shared/lib/features';

export const ListViewsTypes = [
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
    {
        view: ArticleView.TILE,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TileIcon,
            off: () => TileIconDeprecated,
        }),
    },
];
