import { useEffect, useState } from "react";
import Axios from "axios";

const OrderDirectory = () => {

    return (
        <section className="order-directory">
            <div className="orderDir-container">
                <h2>Order Directory</h2>
                <table>
                    <thead>
                            <th>
                                Order Id
                            </th>
                            <th>
                                Customer Name
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Actions
                            </th>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </section>
    )

}

export default OrderDirectory;