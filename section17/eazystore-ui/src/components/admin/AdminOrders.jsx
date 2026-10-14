import React from 'react'
import apiClient from '../../api/apiClient';
import { useLoaderData } from 'react-router-dom';
import PageTitle from '../PageTitle';
import OrderItem from '../OrderItem';


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
            { pendingOrders.length > 0 ? (
              pendingOrders.map((order) => (
                <OrderItem key={order.orderId} order={order} fromAdmin={true} />
              ))
            ) :(
              <p className="text-center font-primary font-bold text-lg text-primary dark:text-light">
                No Orders found
              </p>
            )}        
          </div>
        </div>
  )
}


