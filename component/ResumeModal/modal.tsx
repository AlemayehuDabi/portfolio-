import React, { SetStateAction } from 'react';
import { FaX } from 'react-icons/fa6';
import { toast, Bounce } from 'react-toastify';

export default function ResumeModal({
  isResume,
  setIsResume,
}: {
  isResume: boolean;
  setIsResume: React.Dispatch<SetStateAction<boolean>>;
}) {
  const handleToast = () => {
    setTimeout(() => {
      toast('Thank you for considering my resume', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isResume ? 'bg-black/60' : 'hidden'
      }`}
      onClick={() => setIsResume(!isResume)}
    >
      <div
        className="bg-white p-8 relative rounded-lg flex flex-col gap-4 justify-center items-center mx-auto  "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute -top-4 -right-4 md:-right-10 text-white bg-gray-600 w-8 h-8 flex justify-center items-center rounded-full"
          onClick={() => setIsResume(!isResume)}
        >
          <FaX />
        </div>

        <p>What format would you prefer?</p>

        <div className="flex gap-4 items-center">
          <a
            href="/api/resume/download/pdf"
            download="AlemayehuDabi_Resume.pdf"
            onClick={() => {
              setIsResume(false);
              handleToast();
            }}
            className="px-4 py-1 bg-blue-900 text-white rounded-xl cursor-pointer"
          >
            PDF
          </a>

          <a
            href="api/resume/download/docx"
            download="AlemayehuDabi_Resume.docx"
            onClick={() => {
              setIsResume(!isResume);
              handleToast();
            }}
            className="px-4 py-1 bg-blue-900 text-white rounded-xl cursor-pointer"
          >
            DOCX
          </a>
        </div>
      </div>
    </div>
  );
}
