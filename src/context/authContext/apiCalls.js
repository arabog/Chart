import { loginStart, loginSuccess, loginFailure } from "./AuthActions" 
import axios from "axios"


export const login = async (user, dispatch) => {
          dispatch(loginStart())

          try {
                    const res = await axios.get("auth/login", user)

                    res.data.isAdmin && dispatch(loginSuccess(res.data))

          } catch (err) {
                    dispatch(loginFailure())
          }
}