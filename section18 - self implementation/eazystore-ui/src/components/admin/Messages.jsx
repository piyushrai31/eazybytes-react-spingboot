import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { useRevalidator } from 'react-router-dom';
import { toast } from "react-toastify";

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
                onClick={()=> messageAction(message.id)}>
                  {message.status}                  
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

export async function messageAction(messageDetail) {
  console.log(messageDetail + " printing from message action");
  // const data = await message;
  if(messageDetail===null){
     toast.failure("No button clicked");
     return;
  }

  const messageData = {
    messageId:messageDetail,
  };
  
  try {
    const response = await apiClient.put("/admin/messageStatus", messageData);
    toast.success("Message closed successfully!");
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