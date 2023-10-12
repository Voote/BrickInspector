import classNames from 'classnames';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

interface CountButtonProps {
  label: string;
  variant?: CountButtonVariant;
  action: (event: GestureResponderEvent) => void;
}

export const CountButton: React.FC<CountButtonProps> = ({
  label,
  variant = 'default',
  action,
}) => {
  const { color: buttonColor } = buttonVariantStyles[variant];
  return (
    <TouchableOpacity
      className={classNames(buttonColor, 'my-1')}
      onPress={action}
    >
      <Text className="text-center text-white font-extrabold text-lg">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

type CountButtonVariant = 'default' | 'positive' | 'negative';

const buttonVariantStyles: Record<CountButtonVariant, { color: string }> = {
  default: { color: 'bg-[#582A12]' },
  positive: { color: 'bg-[#0055BF]' },
  negative: { color: 'bg-[#C91A09]' },
};
