import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line kvolk-plugin/layer-import
import { UserRoles } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRoles[];
};
