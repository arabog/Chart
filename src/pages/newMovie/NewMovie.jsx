import "./newMovie.css"


export default function NewProduct() {

          
          return (
                    <div className="newProduct">
                              <h1 className="addProductTitle">New Product</h1>

                              <form className="addProductForm">
                                        <div className="addProductItem">
                                                  <label htmlFor="file">Image</label>
                                                  <input type="file"  id="file" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor=" name">Name</label>
                                                  <input type="text"  id="name" placeholder="Apple Airpods" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor=" name">Name</label>
                                                  <input type="text"  id="name"  placeholder="123" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor=" active">Active</label>
                                                  <select name="active" id="active">
                                                            <option value="yes"> Yes </option>
                                                            <option value="no"> No </option>
                                                  </select>
                                        </div>

                                        <button className="addProductButton">Create New Product</button>
                              </form>
                    </div>
          )
}
