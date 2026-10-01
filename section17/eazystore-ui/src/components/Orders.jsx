import React from 'react'
import { useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import apiClient from "../api/apiClient";
import PageTitle from './PageTitle';



export default function Orders() {
  const {createdAt , orderId, orderItems, orderStatus, totalPrice} = useLoaderData();
  console.log("printing from here")
  // console.log(orders);
  return (
    <div className="min-h-[852px] py-12 bg-normalbg dark:bg-darkbg font-primary">
      <PageTitle title="My Orders" />
      <div className="min-h-80 max-w-4xl mx-auto my-8 w-full font-primary">
        {/* {orderItems.length > 0 ? (
          orderItems.map((order) => (
            <OrderItem key={order.orderItemId} order={order} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary dark:text-light">
            No Orders found
          </p>
        )}         */}
        hello
      </div>
    </div>
  )
}

export async function ordersLoader() {
  try {
    const response = await apiClient.get("/orders"); // Axios GET Request
    console.log("printing from api client")
    console.log(response.data);
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
