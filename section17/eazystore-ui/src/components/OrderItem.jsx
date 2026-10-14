import React from 'react'
import { Link } from 'react-router-dom';
import apiClient from '../api/apiClient';

export default function OrderItem({ order, fromAdmin }) {
    console.log(order);
    console.log(order.orderItems)
    return (
        <div>
            <div className="bg-normalbg dark:bg-darkbg font-primary">
                <table className="w-full">
                    <tbody class="divide-y divide-primary dark:divide-light">
                        <tr>
                            <td>
                                {"Order #" + order.orderId}
                                <br />
                                {"Status: " + order.orderStatus}
                                <br />
                                {"Total Price: " + order.totalPrice}
                                <br />
                                {"Date: " + (order.createdAt === null ? "Null" : order.createdAt.split("T")[0])}
                            </td>
                            <td>
                                {fromAdmin && (
                                    <>
                                        <button className="bg-primary dark:bg-light text-light dark:text-primary border-2 rounded-xl px-1 m-1"
                                        onClick= {() => adminOrdersAction(order.orderId,"confirm")}>
                                        Confirm
                                        </button>
                                        <button className="bg-red-600 border-2 rounded-xl px-1 m-1"
                                        onClick= {() => adminOrdersAction(order.orderId,"cancel")}>
                                        Cancel
                                        </button>
                                    </>
                                    
                                    
                                )}

                            </td>
                        </tr>
                        {order.orderItems.map((item) => (
                            <tr className="text-sm sm:text-base text-primary dark:text-light text-center">
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
                            
                        ))
                        }

                    </tbody>
                </table>
            </div>
            <br />
        </div>
    )
}


export async function adminOrdersAction(orderId, orderStatus) {

  const orderData = {
    id:orderId,
    updatedStatus:orderStatus,
  };
  console.log(orderData);
  
  try {
    const response = await apiClient.put("http://localhost:8080/api/v1/admin/orderStatus", orderData);
    toast.success("Order status upated successfully!");
    return { success: true };
  } catch (error) {
    if (error.response?.status === 400) {
      return { success: false, errors: error.response?.data };
    }
    throw new Response(
      error.response?.data?.errorMessage ||
        error.message ||
        "Failed to submit your message. Please try again.",
      { status: error.status || 500 }
    );
  }
}