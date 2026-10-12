import React from 'react'
import { useLoaderData } from 'react-router-dom';
import apiClient from '../../api/apiClient';

export async function messagesLoader() {
  try {
    const response = await apiClient.get("/admin/messages"); // Axios GET Request
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

export default function Messages() {
  const messages = useLoaderData();
  // console.log(messages);
  return (
    <div className="min-h-80 max-w-4xl mx-auto my-8 w-full font-primary">
      <table className="w-full border-1">
        <thead>
          <tr className="uppercase text-sm text-primary dark:text-light border-primary dark:border-light">
            <th className="px-6 py-4 border-1">Name</th>
            <th className="px-6 py-4 border-1">Email</th>
            <th className="px-6 py-4 border-1">Mobile Number</th>
            <th className="px-6 py-4 border-1">Message</th>
            <th className="px-6 py-4 border-1">Set Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary dark:divide-light">
          {messages.map((message)=> (
            <tr
              key={message.email}
              className="text-sm sm:text-base text-primary dark:text-light text-center  border-primary dark:border-light"
            >
              <td className="px-4 sm:px-6 py-4 border-1">
                {message.name}
              </td>
              <td className="px-4 sm:px-6 py-4 border-1">
                {message.email}
              </td>
              <td className="px-4 sm:px-6 py-4 border-1">
                {message.mobileNumber}
              </td>
              <td className="px-4 sm:px-6 py-4 border-1">
                {message.message}
              </td>
              <td className="px-4 sm:px-6 py-4 border-1">
                <button className=" bg-red-500 rounded-xl"
                onClick={()=>(console.log("hello"))}>
                  {message.status==="OPEN"?"CLOSE":OPEN}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}