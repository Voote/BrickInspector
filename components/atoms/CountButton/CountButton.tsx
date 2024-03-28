import classNames from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { CountButtonVariant, buttonVariantStyles } from './CountButton.style';

export const CountButton: FC<CountButtonProps> = ({
  label,
  variant = 'default',
  action,
  longAction,
}) => {
  const { color: buttonColor, text: buttonTextColor } =
    buttonVariantStyles[variant];
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleLongPress = (event: GestureResponderEvent) => {
    if (longAction) {
      longAction(event);
      const startTime = Date.now();

      const triggerAction = () => {
        const elapsedTime = Date.now() - startTime;
        longAction(event);
        let nextIntervalDuration = elapsedTime > 4000 ? 1000 : 500;
        updateIntervalRef(setTimeout(triggerAction, nextIntervalDuration));
      };
      updateIntervalRef(setTimeout(triggerAction, 500));
    }
  };

  const updateIntervalRef = (newValue: number | null) => {
    if (intervalRef.current !== null) {
      clearTimeout(intervalRef.current);
    }
    intervalRef.current = newValue;
  };

  const handlePressOut = () => {
    updateIntervalRef(null);
  };

  return (
    <TouchableOpacity
      className={classNames(buttonColor, 'my-1')}
      accessibilityLabel={label}
      onPress={action}
      onLongPress={handleLongPress}
      onPressOut={handlePressOut}
    >
      <Text
        className={classNames(
          buttonTextColor,
          'text-center font-extrabold text-lg',
        )}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface CountButtonProps {
  label: string;
  variant?: CountButtonVariant;
  action: (event: GestureResponderEvent) => void;
  longAction?: (event: GestureResponderEvent) => void;
}
