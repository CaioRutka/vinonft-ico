import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Button } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';

export default function MyModal({connectWallet, buttonPadding, fontSize}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <Button
            backgroundColor = "#A6013B"
            borderRadius = "30px"
            color = "white"
            fontFamily = "CloserText"
            fontSize={fontSize}
            padding = {buttonPadding}
            margin = "0 15px"
            onClick = {openModal}
        >
            Connect
        </Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Wallet Connect
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-l text-gray-500">
                      Qual das seguintes wallets deseja usar para se conectar?                       
                    </p>
                    <p className="text-l text-gray-500">
                        Você será redirecionado para o respectivo aplicativo.                     
                    </p>
                  </div>

                    {
                      isMobile
                      ?
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#fff] px-4 py-2 text-sm font-medium text-{black}-900 hover:bg-[#e8e8e8] focus:outline-none focus-visible:ring-2 focus-visible:ring-{blue}-500 focus-visible:ring-offset-2"
                          onClick={() => {connectWallet(0)}}
                        >
                          <MetaIcon/>
                        </button>

                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#fff] px-4 py-2 text-sm font-medium text-{black}-900 hover:bg-[#e8e8e8] focus:outline-none focus-visible:ring-2 focus-visible:ring-{blue}-500 focus-visible:ring-offset-2"
                          onClick={() => {connectWallet(1)}}
                        >
                         <TrustIcon/>
                        </button>
                      </div>
                      :
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#fff] px-4 py-2 text-sm font-medium text-{black}-900 hover:bg-[#e8e8e8] focus:outline-none focus-visible:ring-2 focus-visible:ring-{blue}-500 focus-visible:ring-offset-2"
                          onClick={() => {connectWallet(0)}}
                        >
                          <MetaIcon/>
                        </button>
                      </div>
                    }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

const TrustIcon = (props) => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke="#3375bb"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={12}
      d="M95.958 22C121.031 42.867 149.785 42 158 42c-1.797 118.676-15 95-62.042 128C49 137 35.798 160.676 34 42c8.13 0 36.883.867 61.958-20Z"
    />
  </svg>
);

const MetaIcon = (props) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#f6851b"
    strokeWidth={3}
    {...props}
  >
    <path d="m54 26 2 2-4 4 4 12-2 10-12-4-6 4h-8l-6-4-12 4-2-10 4-12-4-4 2-2-2-10 2-8 14 8h16l14-8 2 8-2 10z" />
    <path d="m40 16-2 8-2 16h-8l-2-16-2-8" />
    <path d="m28 40-6 10" />
    <path d="m36 40 6 10" />
    <path d="M32 48v6" />
    <path d="m12 32 14-8" />
    <path d="m38 24 14 8" />
    <path d="m28 40-10-4" />
    <path d="m36 40 10-4" />
  </svg>
);
