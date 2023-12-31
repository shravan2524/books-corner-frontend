import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Card(props) {
    const navigate = useNavigate();
    function submit() {
        navigate(`/bookinfo/${props._id}`, { props: props });
    }

    return (
        <div  class="my-4 items-center md:flex bg-white border rounded-lg shadow-md md:flex-row ">
        <a onClick={submit} className='w-full md:flex  cursor-pointer'>
            <img class="object-cover w-full rounded-t-lg h-96 md:h-32 md:w-[6rem] md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 bold ">{props.bookName}</p>
                <div className='flex w-[10rem] justify-between'>
                <p>{props.likes} likes</p>
                <div className='border-[1px] border-grey'></div>
                <p>{props.comments.length} comments</p>
                </div>

            </div>

        </a>
        </div>
    )
}