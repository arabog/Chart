import "./login.css"
import { useState } from "react"


export default function Login() {
          const [email, setEmail] = useState("")
          const [password, setPassword] = useState("")


          return (
                    <div className="login">
                              <form className="logiinForm">
                                        <input 
                                                  type="text" 
                                                  placeholder="email" 
                                                  className="loginInput"
                                                  onChange = {e => setEmail(e.target.value)}
                                        />

                                        <input type="password" 
                                                  placeholder="password"
                                                  className="loginInput"
                                                  onChange = {e => setPassword(e.target.value)}
                                        />

                                        <button className="loginBtn">
                                                  Login
                                        </button>
                              </form>
                              
                    </div>
          )
}
