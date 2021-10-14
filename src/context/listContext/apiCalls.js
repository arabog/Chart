import axios from "axios"
import {
          createListsStart,
          createListsSuccess,
          createListsFailure,

          getListsStart,
          getListsSuccess,
          getListsFailure,

          deleteListStart,
          deleteListSuccess,
          deleteListFailure
} from "./ListActions"


// create
export const createLists = async (list, dispatch) => {
          dispatch(createListsStart())

          try {
                    const res = await axios.post("/lists", list)

                    dispatch(createListsSuccess(res.data))
          } catch (err) {
                    dispatch(createListsFailure())
          }
}


// read
export const getLists = async (dispatch) => {
          dispatch(getListsStart())

          try {
                    const res = await axios.get("/lists")

                    dispatch(getListsSuccess(res.data))
          } catch (err) {
                    dispatch(getListsFailure())
          }
}


// delete
export const deleteLists = async (id, dispatch) => {
          dispatch(deleteListStart())

          try {
                    await axios.delete("/lists" + id)

                    dispatch(deleteListSuccess(id))
          } catch (err) {
                    dispatch(deleteListFailure())
          }
}