import React from 'react'
import { useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';



export default function Orders() {
  const orders = useLoaderData();
  return (
    <div className="min-h-[852px] py-12 bg-normalbg dark:bg-darkbg font-primary">
      <PageTitle title="My Orders" />
      <div className="min-h-80 max-w-4xl mx-auto my-8 w-full font-primary">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderItem key={order.orderId} order={order} />
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

export async function ordersLoader() {
  try {
    const response = await apiClient.get("/orders"); // Axios GET Request
    return response.data;
  } catch (error) {
    throw new Response(
      error.response?.data?.errorMessage ||
      error.message ||
      "Failed to fetch Orders. Please try again.",
      { status: error.status || 500 }
    );
  }
}
