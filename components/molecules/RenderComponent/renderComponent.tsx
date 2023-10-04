import { PartsList } from '@/components/molecules/PartsList/PartsList';
import { SetInfo } from '@/components/molecules/SetInfo/SetInfo';
import { FetchedDataProps, SetInfoProps } from '@/features/helpers/dataTypes';
import { FC } from 'react';

type RenderComponentProps = {
  data: SetInfoProps | FetchedDataProps;
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
      const partsData = data as FetchedDataProps;
      return <PartsList pieces={partsData} />;
    default:
      return null;
  }
};

// export const RenderComponent: FC<RenderComponentProps> = ({
//   data,
//   variant,
// }) => {
//   const [shouldFetch, setShouldFetch] = useState(false);

//   switch (variant) {
//     case 'SET':
//       const setData = data as SetInfoProps;
//       return (
//         <>
//           <SetInfo
//             dataName={setData.name}
//             dataImg={setData.set_img_url}
//             setShouldFetch={setShouldFetch}
//           />
//           {shouldFetch && (
//             <FetchWithVariant searchQuery={setData.set_num} variant="PARTS" />
//           )}
//         </>
//       );
//     case 'PARTS':
//       const partsData = data as FetchedData;
//       return <PartsList pieces={partsData} />;
//     default:
//       return null;
//   }
// };
