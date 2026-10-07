import React from 'react'

export default function OrderItem({ order }) {
    console.log(order);
    console.log(order.orderItems)
    return (
        <div>
            <div className="divide-y divide-primary dark:divide-light bg-blue-200">
                <table>
                    <tbody>
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
                        {order.orderItems.map((item) =>
                            <img
                                src={item.product.imageUrl}
                                alt={item.product.name}
                                className="w-16 h-16 rounded-md object-cover mr-4 hover:scale-110 transition-transform"
                            />                            
                            // {  + " " + item.quantity + " "}
                        )}
                    </tbody>
                </table>
            </div>
            <br />
        </div>
    )
}
