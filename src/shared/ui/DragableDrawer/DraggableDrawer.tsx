import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { classNames, Modes } from '@/shared/lib/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import classes from './DraggableDrawer.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface DraggableDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DraggableDrawer = (props: DraggableDrawerProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);

  const { Spring, Gesture } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const open = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const close = (velocity = 0) => {
    setIsClosing(true);
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.slow, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) {
        cancel();
      }

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close(vy);
        } else {
          open();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const modes: Modes = {
    [classes.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [api, isOpen, open]);

  return (
       <Portal>
            <div className={classNames(classes.DraggableDrawer, modes, [className, theme])}>
                 {isOpen && <Overlay onClick={close} />}
                 <Spring.a.div
                    className={classes.sheet}
                    {...bind()}
                    style={{ bottom: `calc(-100vh + ${height}px)`, y }}
                 >
                      {children}
                 </Spring.a.div>
            </div>
       </Portal>
  );
};

const DrawerAsync = (props: DraggableDrawerProps) => {
  const { isLoaded } = useAnimationLibs();
  if (!isLoaded) {
    return null;
  }
  return <DraggableDrawer {...props} />;
};

export const Drawer = (props: DraggableDrawerProps) => (
     <AnimationProvider>
          <DrawerAsync {...props} />
     </AnimationProvider>
);
