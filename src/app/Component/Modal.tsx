import { SendHorizonalIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface IModalTypes {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

function Modal(props: IModalTypes) {
  const { isModalOpen, setIsModalOpen } = props;

  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(isModalOpen);
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed flex justify-center w-full h-full left-0 bottom-0 bg-black/80">
          <div className="bg-black min-w-1/3 min-h-56 absolute top-32 border border-neutral-600 px-10 py-10">
            <X
              width={25}
              className="absolute -top-2.5 -right-3 hover:cursor-pointer hover:"
              onClick={() => setIsModalOpen(false)}
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col text-left">
                <label htmlFor="name" className="mb-2 text-sm text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="email" className="mb-2 text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="message" className="mb-2 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center gap-2 items-center px-6 py-3 rounded-lg bg-[#171717] text-white border border-neutral-800 font-medium hover:bg-gray-200 transition"
              >
                <span>Send </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
