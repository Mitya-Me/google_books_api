import axios from 'axios';
import { Dispatch } from 'redux';
import { API_KEY, API_URL } from '../../base';
import { BooksAction, BooksActionTypes, BooksState } from '../../types/booksT';


export const fetchBooks = (title = 'fullstack', category = 'all', orderBy='relevance')=> { 
    return async (dispatch: Dispatch<BooksAction>) => { 
        try {
            dispatch({ type: BooksActionTypes.FETCH_BOOKS });
            const response = await axios.get(
                `${API_URL}q=${title}+subject=${category}&orderBy=${orderBy}&maxResults=30&key=${API_KEY}`
            )
            dispatch({
                type: BooksActionTypes.FETCH_BOOKS_SUCCESS,
                payload: response.data,
            })
        } catch { 
            dispatch({
                type: BooksActionTypes.FETCH_BOOKS_FAIL,
                payload: `Sorry, books fetching failed...`
            })
        }
    }
}
