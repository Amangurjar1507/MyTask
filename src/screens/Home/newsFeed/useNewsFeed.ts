import {useCallback, useState} from 'react';
import useSWR from 'swr';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';

const useNewsFeed = () => {
  const [Show, setShow] = useState<boolean>(false);
  const [newsFeedData, setNewsFeedData] = useState ([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSwipeSuccess = () => {
    if (currentIndex < newsFeedData.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  const onSwipNewsShow = useCallback(() => {
    setShow(true);
  }, [Show]);
  const onSwipNewsClose = useCallback(() => {
    setShow(!Show);
  }, [Show]);

  // Fetch data using useSWR hook
  const {data, error} = useSWR(constant.baseURL, async (url: string) => {
    try {
      // Send a GET request to the specified URL
      const response = await fetch(url);
      // Check if the response is OK (status code in the range 200-299)
      if (!response.ok) {
        // If response is not OK, throw an error
        throw new Error('Failed to fetch data');
      }
      // Parse the response body as JSON
      const responseData = await response.json();
      // Set the fetched data to the state variable
      setNewsFeedData(responseData?.articles);
      // Return the fetched data
      return responseData;
    } catch (error) {
      Log('error', error);
      // rethrow the error to be caught by useSWR
      throw error;
    }
  });

  const handleSuccess = () => {
    setShow(true);
  };

  return {
    onSwipNewsShow,
    handleSuccess,
    onSwipNewsClose,
    Show,
    newsFeedData,
    setNewsFeedData,
    handleSwipeSuccess,
    handleReset,
    currentIndex,
  };
};

export default useNewsFeed;
