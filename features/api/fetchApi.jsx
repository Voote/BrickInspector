import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { config } from '../../config';

export const FetchWithAsyncAwait = ({ searchQuery }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${config.apiBaseUrl}${searchQuery}?key=${config.apiBaseKey}`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {/* {data && <Text>Data fetched</Text>} */}
      {/* {data && <Text>{config.apiBaseUrl}</Text>} */}
      {data && <Text>{data.name}</Text>}
    </View>
  );
};

// export const FetchWithAsyncAwait = async () => {
//   const [data, setData] = useState(null);
//   const searchQuery = 'sets/75127-1';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.REBRICKABLE_API_URL}${searchQuery}?key=${process.env.REBRICABLE_API_KEY}`,
//         );
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <View>
//       <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
//     </View>
//   );
// };

//   `https://rebrickable.com/api/v3/lego/sets/?key=${process.env.REBRICABLE_API_KEY}`,
