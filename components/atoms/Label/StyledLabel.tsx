import { FC, ReactNode } from 'react';
import { Text } from 'react-native';

interface StyledLabelProps {
  children: ReactNode;
  variant?: LabelVariant;
}

export const StyledLabel: FC<StyledLabelProps> = ({
  children,
  variant = 'default',
}) => {
  const { styles: labelClasses } = labelStyles[variant];

  return <Text className={labelClasses}>{children}</Text>;
};

type LabelVariant = 'default' | 'loading' | 'info' | 'error' | 'heading';

const labelStyles: Record<LabelVariant, { styles: string }> = {
  default: { styles: 'text-center' },
  loading: { styles: 'bg-green-500 mx-4 p-1' },
  info: { styles: 'text-center text-white font-light' },
  error: { styles: 'text-center text-red-500 p-2 font-bold' },
  heading: {
    styles: 'mx-12 text-green-600 text-lg font-bold leading-5 text-center',
  },
};
