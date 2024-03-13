import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

export const CountButton: FC<CountButtonProps> = ({
  label,
  variant = 'default',
  action,
  longAction,
}) => {
  const { color: buttonColor, text: buttonTextColor } =
    buttonVariantStyles[variant];
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleLongPress = (event: GestureResponderEvent) => {
    if (longAction) {
      longAction(event); // Initial long press action
      // Start the interval and store its ID
      const id = setInterval(() => longAction(event), 500);
      setIntervalId(id);
    }
  };

  const handlePressOut = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <TouchableOpacity
      className={classNames(buttonColor, 'my-1')}
      onPress={action}
      onLongPress={handleLongPress}
      onPressOut={handlePressOut} // Make sure to bind `handlePressOut` to stop the interval
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

type CountButtonVariant = 'default' | 'positive' | 'negative';

const buttonVariantStyles: Record<
  CountButtonVariant,
  { color: string; text: string }
> = {
  default: { color: 'bg-[#582A12]', text: 'text-black' },
  positive: { color: 'bg-[#0055BF]', text: 'text-white' },
  negative: { color: 'bg-[#C91A09]', text: 'text-white' },
};

interface CountButtonProps {
  label: string;
  variant?: CountButtonVariant;
  action: (event: GestureResponderEvent) => void;
  longAction?: (event: GestureResponderEvent) => void;
}
