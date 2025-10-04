"use client";

import { LinkedInIcon } from "@/assets";

import {
  Github,
  Linkedin,
  LinkedinIcon,
  LucideSend,
  Mail,
  SendHorizonalIcon,
  SendHorizontalIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import React, { useState } from "react";
import Modal from "@/app/Component/Modal";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/assets";

const Contact: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = (value: boolean) => {
    setOpenModal(value);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-black text-white px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
        <h2 className="my-10 text-sm">
          Interested in working together or just want to say hi? Reach out to
          me!
        </h2>
        <form className="flex justify-center mb-12">
          <div className="relative flex items-center">
            <input
              type="text"
              onClick={() => setOpenModal(true)}
              className="min-w-sm max-md:min-w-xs h-12 bg-[#171717]/70 backdrop-blur-sm outline-none indent-5 border border-neutral-800 rounded-full"
              placeholder="Write your message here..."
            />
            <SendHorizontalIcon className="absolute right-5 transform hover:scale-75" />
          </div>
        </form>
        <div className="flex gap-4 justify-center">
          <Link
            href="https://github.com/Prathamesh625"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thoratprathamesh625/"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:thoratprathamesh052@gmail.com"
            className="hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Prathamesh. All rights reserved.
        </div>
        <Modal isModalOpen={openModal} setIsModalOpen={handleOpenModal} />
      </div>
    </section>
  );
};

export default Contact;
