import {
          createMovieStart,
          createMovieSuccess,
          createMovieFailure,

          getMovieStart,
          getMovieSuccess,
          getMovieFailure,

          deleteMovieStart,
          deleteMovieSuccess,
          deleteMovieFailure,
} from "./MovieActions"
import axios from "axios"


// create
export const createMovie = async(movie, dispatch) => {
          dispatch(createMovieStart())

          try {
                    const res = await axios.post("/movies", movie)

                    dispatch(createMovieSuccess(res.data))
          } catch (err) {
                    dispatch(createMovieFailure())
          }
}


// read
export const getMovies = async (dispatch) => {
          dispatch(getMovieStart())

          try {
                    const res = await axios.get("/movies")

                    dispatch(getMovieSuccess(res.data))
          } catch (err) {
                    dispatch(getMovieFailure(err))
          }
}


// delete
export const deleteMovie = async(id, dispatch) => {
          dispatch(deleteMovieStart())

          try {
                    await axios.delete("/movies/" + id)

                    dispatch(deleteMovieSuccess(id))
          } catch (err) {
                    dispatch(deleteMovieFailure(err))
          }
}