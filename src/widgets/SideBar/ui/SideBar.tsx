import React, {useState} from 'react';

import {classNames} from "shared/lib/classNames";

import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

import classes from "./SideBar.module.scss"

interface SideBarProps {
	className?: string;
}

export const SideBar = ({className}: SideBarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const onToggle = () => {
		setCollapsed(prevState => !prevState)
	}

	return (
		<div className={
			classNames(
				classes.SideBar,
				{[classes.collapsed]: collapsed},
				[className]
			)
		}>
			<button onClick={onToggle}>Toggle</button>
			<div className={
				classNames(
					classes.switchers,
					{[classes.expanded]: !collapsed},
					[]
				)
			}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
}