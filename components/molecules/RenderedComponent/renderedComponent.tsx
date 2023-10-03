import { PartsList } from '@/components/molecules/PartsList/PartsList';
import { SetInfo } from '@/components/molecules/SetInfo/SetInfo';
import { SetInfoProps } from '@/features/helpers/dataTypes';
import { FC } from 'react';

type RenderedComponentProps = {
  data: SetInfoProps | any;
  variant: 'SET' | 'PARTS';
};

export const RenderedComponent: FC<RenderedComponentProps> = ({
  data,
  variant,
}) => {
  switch (variant) {
    case 'SET':
      return (
        <SetInfo
          dataName={data.name}
          dataImg={data.set_img_url}
          setNumber={data.set_num}
        />
      );
    case 'PARTS':
      return <PartsList pieces={data} />;
    default:
      return null;
  }
};
