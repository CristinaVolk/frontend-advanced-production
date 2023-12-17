import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';

import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/DragableDrawer';
import type { RatingProps } from './Rating';

export const RatingRedesigned = memo((props: RatingProps) => {
    const { t } = useTranslation('article');
    const {
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);

    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const onCancelHandler = useCallback(() => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const onAcceptHandler = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [feedback, onAccept, starsCount]);

    const modalContent = (
        <VStack max gap="32">
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingModal.Input"
                value={feedback}
                placeholder={t('feedback')}
                onChange={setFeedback}
            />
            <HStack max gap="16" justify="end">
                <Button
                    data-testid="RatingModal.Close"
                    onClick={onCancelHandler}
                >
                    {t('Close')}
                </Button>
                <Button
                    data-testid="RatingModal.Send"
                    onClick={onAcceptHandler}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </VStack>
    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                {rate ? <Text title={t('thanks')} /> : <Text title={title} />}
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal
                    lazy
                    isOpen={isModalOpen}
                    modalTheme="primary"
                    onClose={onCancelHandler}
                >
                    {modalContent}
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={onCancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={onAcceptHandler} size="l">
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <Card data-testid="RatingCard" max border="round" cardPaddings="24">
            {content}
        </Card>
    );
});
