import React from 'react'
import apiClient from '../../api/apiClient';
import { useLoaderData } from 'react-router-dom';
import PageTitle from '../PageTitle';
import OrderItem from '../OrderItem';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export async function adminOrdersLoader() {
  try {
    const response = await apiClient.get("/admin/orders"); // Axios GET Request
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Response(
      error.response?.data?.errorMessage ||
      error.message ||
      "Failed to fetch profile details. Please try again.",
      { status: error.status || 500 }
    );
  }
}

export default function AdminOrders() {
  const pendingOrders = useLoaderData();
  return (
    <div className="min-h-[852px] py-12 bg-normalbg dark:bg-darkbg font-primary">
      <PageTitle title="Admin Pending Orders" />
      <div className="min-h-80 max-w-4xl mx-auto my-8 w-full font-primary">
        {pendingOrders.length > 0 ? (
          pendingOrders.map((order) => (
            <div>
              <div className="bg-normalbg dark:bg-darkbg font-primary">
                <table className="w-full">
                  <tbody className="divide-y divide-primary dark:divide-light">
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
                        
                          <>
                            <button className="bg-primary dark:bg-light text-light dark:text-primary border-2 rounded-xl px-1 m-1"
                              onClick={() => adminOrdersAction(order.orderId, "confirm")}>
                              Confirm
                            </button>
                            <button className="bg-red-600 border-2  text-primary dark:text-light  rounded-xl px-1 m-1"
                              onClick={() => adminOrdersAction(order.orderId, "cancel")}>
                              Cancel
                            </button>
                          </>
                        

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
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary dark:text-light">
            No Orders found
          </p>
        )}
      </div>
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
    const response = await apiClient.put("/admin/orderStatus", orderData);
    console.log(response.data);
    response.data? toast.success("Order status upated successfully!") : toast.error("order not updated, please try again");
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

