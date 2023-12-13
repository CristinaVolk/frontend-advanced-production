import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import classes from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';
import ClickableCopyIcon from '../../../assets/icons/copy-redesigned.svg';

interface CodeProps {
    className?: string;
    codingLines: string;
}

export const Code = (props: CodeProps) => {
    const { className, codingLines } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codingLines);
    }, [codingLines]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(classes.CodeRedesigned, {}, [
                        className,
                    ])}
                >
                    <Icon
                        clickable
                        Svg={ClickableCopyIcon}
                        onClick={onCopy}
                        className={classes.copyBtn}
                    >
                        <CopyIcon className={classes.copyIcon} />
                    </Icon>
                    <code>{codingLines}</code>
                </pre>
            }
            off={
                <pre className={classNames(classes.Code, {}, [className])}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onCopy}
                        className={classes.copyBtn}
                    >
                        <CopyIcon className={classes.copyIcon} />
                    </Button>
                    <code>{codingLines}</code>
                </pre>
            }
        />
    );
};
