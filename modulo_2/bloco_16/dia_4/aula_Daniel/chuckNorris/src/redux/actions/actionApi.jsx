import fetchApi from "../../services";
export const GET_API = 'GET_API';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const GET_API_ERROR = 'GET_API_ERROR';

const getApi = () => ({
  type: GET_API,
  // isLoading: true,
  // payload: { isLoading: true }
});

const getApiSuccess = (jokes) => ({
  type: GET_API_SUCCESS,
  jokes,
  // isLoading: false,
  // payload: { isLoading: false, jokes }
});

const getApiError = (error) => ({
  type: GET_API_ERROR,
  // isLoading: false,
  error,
  // payload: { isLoading: false, error }
});

export const getJokeApi = () => async (dispatch) => {
  dispatch(getApi());
  try {
    const joke = await fetchApi();
    dispatch(getApiSuccess(joke));
  } catch(error) {
    dispatch(getApiError(error))
  }
}
