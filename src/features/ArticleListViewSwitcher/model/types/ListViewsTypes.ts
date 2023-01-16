import ListIcon from '@/shared/assets/icons/list-icon.svg';
import TileIcon from '@/shared/assets/icons/tile-icon.svg';
import { ArticleView } from '@/entities/Article';

export const ListViewsTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
];
