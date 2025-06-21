'use client';
import {useRouter } from "next/router";


const GetLeadById = () => {
  const { id } = useRouter().query;
  
  return (
    <div>
      Get Lead By ID :{id}
    </div>
  );
}
export default GetLeadById;