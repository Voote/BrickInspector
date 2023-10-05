import { config } from '@/config';

export const endpoints = {
  getSetInfo: ({ setNumber, variantValue }: EndpointsProps) =>
    `${config.apiBaseUrl}${setNumber}${variantValue}${config.apiBaseKey}`,
};

export interface EndpointsProps {
  setNumber: string;
  variantValue: string;
}
