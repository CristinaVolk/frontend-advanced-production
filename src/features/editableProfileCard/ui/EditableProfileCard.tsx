import React from 'react';
import { classNames } from 'shared/lib/classNames';

import classes from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
	className?: string;
}

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => (
     <div className={classNames(classes.EditableProfileCard, {}, [className])} />
);
