import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import classes from './Code.module.scss';

interface CodeProps {
    className?: string;
    codingLines: string;
}

/**
 * deprecated
 */
export const Code = (props: CodeProps) => {
    const { className, codingLines } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codingLines);
    }, [codingLines]);

    return (
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
    );
};
