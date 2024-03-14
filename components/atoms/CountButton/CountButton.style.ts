export type CountButtonVariant = 'default' | 'positive' | 'negative';

export const buttonVariantStyles: Record<
  CountButtonVariant,
  { color: string; text: string; label: string }
> = {
  default: {
    color: 'bg-[#582A12]',
    text: 'text-black',
    label: 'orange button',
  },
  positive: {
    color: 'bg-[#0055BF]',
    text: 'text-white',
    label: 'blue button',
  },
  negative: {
    color: 'bg-[#C91A09]',
    text: 'text-white',
    label: 'red button',
  },
};
