import classNames from 'classnames';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

export const CountButton: React.FC<CountButtonProps> = ({
  label,
  variant = 'default',
  action,
  longAction,
}) => {
  const { color: buttonColor, text: buttonTextColor } =
    buttonVariantStyles[variant];

  return (
    <TouchableOpacity
      className={classNames(buttonColor, 'my-1')}
      onPress={action}
      onLongPress={longAction}
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
