import { PartsList } from '@/components/molecules/PartsList/PartsList';
import { SetInfo } from '@/components/molecules/SetInfo/SetInfo';
import { FetchedData, SetInfoProps } from '@/features/helpers/dataTypes';
import { FC } from 'react';

type RenderComponentProps = {
  data: SetInfoProps | FetchedData;
  variant: 'SET' | 'PARTS';
};

export const RenderComponent: FC<RenderComponentProps> = ({
  data,
  variant,
}) => {
  switch (variant) {
    case 'SET':
      const setData = data as SetInfoProps;
      return (
        <SetInfo
          dataName={setData.name}
          dataImg={setData.set_img_url}
          setNumber={setData.set_num}
        />
      );
    case 'PARTS':
      const partsData = data as FetchedData;
      return <PartsList pieces={partsData} />;
    default:
      return null;
  }
};
