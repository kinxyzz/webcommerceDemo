"use client";

import { FormEvent, useRef, useState } from "react";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusText, setStatusText] = useState(" ");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/question", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setStatusText(data.data);

    formRef?.current?.reset();
  }

  return (
    <>
      <div className="flex py-20 container gap-20 flex-col lg:flex-row  m-auto ">
        <div className="flex   w-full py-4 items-center justify-center drop-shadow-md ">
          <div className="flex flex-col w-full">
            <h3 className="text-4xl font-bold ml-4 mt-4">Contact Us</h3>
            <div className="h-full w-full border-yellow-500 border-l-4  ">
              <div className="">
                <div className="flex gap-4 flex-col justify-center m-4">
                  <div className="border-b-2 border-slate-600">
                    <h5 className="w-36 flex gap-2 items-center ">
                      <FaMapMarkedAlt /> Address :
                    </h5>
                    <p className="grow">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi mollitia necessitatibus quod, at assumenda
                      voluptatem temporibus, nam perferendis aliquam dolores
                      doloremque. Architecto necessitatibus, dolor nemo
                      voluptatibus facilis perferendis eaque nam.
                    </p>
                  </div>

                  <div className="border-b-2 border-slate-600">
                    <h5 className="w-36 flex gap-2 items-center flex-nowrap ">
                      <FaPhone /> Contact :
                    </h5>
                    <a href="">
                      <p className="grow">0000000002929</p>
                    </a>
                  </div>
                </div>
                <div className=" shadow-md w-full h-64 rounded-md   mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full flex-col  justify-center py-4 border-yellow-500 border-l-4  ">
          <div className="mb-10 font-semibold text-2xl">
            <h3>Have Some Question?</h3>
            <p className="text-sm text-yellow-500 pt-2">{statusText}</p>
          </div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
            action=""
          >
            <div>
              <Label name="First Name" htmlFor="firstName" />
              <Input type="text" name="firstName" />
            </div>
            <div>
              <Label name="Last Name" htmlFor="lastName" />
              <Input type="text" name="lastName" />
            </div>
            <div>
              <Label name="No. telepon" htmlFor="phoneNumber" />
              <Input type="number" name="phoneNumber" />
            </div>
            <div>
              <Label name="Question" htmlFor="question" />
              <Input type="text" name="question" />
            </div>

            <button
              className="mt-4 p-2 text-white rounded-md  bg-slate-900 hover:bg-yellow-400"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
