import React from 'react'

export const Header = () => {
  return (
    <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    {/* <a href="index.html">
                        <img className="img-fluid" 
                        src="./public/img/logo.jpg" alt="imagen logo" />
                    </a> */}
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="cart img" />

                        <div id="carrito" className="bg-white p-3">
                            <p className="text-center">The cart is empty.</p>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="guitar img" />
                                        </td>
                                        <td>SRV</td>
                                        <td className="fw-bold">
                                                $299
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                1
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="text-end">Total to pay: <span className="fw-bold">$899</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2">Empty Cart</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}