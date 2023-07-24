import axios from 'axios';

const BASE_URL = 'https://api.stackexchange.com/2.3';

export const fetchQuestionsByTag = async (tag) => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`, {
      params: {
        site: 'stackoverflow',
        tagged: tag,
        sort: 'hot',
        filter: '!9_bDDxJY5', 
      },
    });
    console.log("Response",response)
    return response.data.items;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
