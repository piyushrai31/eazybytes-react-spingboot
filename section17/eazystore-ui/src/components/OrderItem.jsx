import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderItem({ order }) {
    console.log(order);
    console.log(order.orderItems)
    return (
        <div>
            <div className="divide-y divide-primary dark:divide-light bg-blue-200">
                <table className="w-full">
                    <tbody class="divide-y divide-primary dark:divide-light">
                        {"Order #" + order.orderId}
                        <br />
                        {"Status: " + order.orderStatus}
                        <br />
                        {"Total Price: " + order.totalPrice}
                        <br />
                        {"Date: " + order.createdAt.split("T")[0]}
                        <br />
                        <br />

                        {/*orderItems[0].quantity} */}


                        {order.orderItems.map((item) => (
                            <tr>
                                <td>
                                    <Link
                                        to={`/products/${item.product.productId}`}
                                        state={{ product: item.product }}                                       
                                        className="flex items-center"
                                    >
                                        <img
                                            src={item.product.imageUrl}
                                            alt={item.product.name}
                                            className="w-16 h-16 rounded-md object-cover mr-4 hover:scale-110 transition-transform"
                                        />
                                    </Link>
                                </td>
                                <td>
                                    <span>{item.product.name}</span>
                                    <br />
                                    <span>Quantity: {item.quantity}</span>
                                    <br />
                                    <span>Price: {item.price}</span>
                                </td>
                            </tr>
                        )
                            // {  + " " + item.quantity + " "}
                        )}

                    </tbody>
                </table>
            </div>
            <br />
        </div>
    )
}
