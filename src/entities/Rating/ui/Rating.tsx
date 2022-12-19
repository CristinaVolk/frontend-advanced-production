import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames';

import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';

import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/DragableDrawer/DraggableDrawer';

interface RatingProps {
	className?: string;
	title?: string;
	feedbackTitle?: string;
	hasFeedback?: boolean;
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
}

export const Rating = memo((props: RatingProps) => {
  const { t } = useTranslation('article');
  const {
    className, title, feedbackTitle, hasFeedback, onCancel, onAccept,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);

  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

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
            <Input placeholder={t('feedback')} onChange={setFeedback} />
            <HStack max justify="end" gap="16">
                 <Button theme={ButtonTheme.NEAT} onClick={onCancelHandler}>
                      {t('Close')}
                 </Button>
                 <Button theme={ButtonTheme.NEAT} onClick={onAcceptHandler}>
                      {t('Send')}
                 </Button>
            </HStack>
       </VStack>
  );

  return (
       <Card className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                 <Text title={title} />
                 <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                 <Modal
                    lazy
                    isOpen={isModalOpen}
                 >
                      {modalContent}
                 </Modal>
            </BrowserView>

            <MobileView>
                 <Drawer isOpen={isModalOpen} onClose={onCancelHandler}>
                      {modalContent}
                 </Drawer>
            </MobileView>
       </Card>
  );
});
