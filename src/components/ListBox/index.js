import { Fragment, React, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Icon from "react-crypto-icons";

import { Bnb, Usdt, Usdc, Btcp } from '@styled-icons/crypto'
import { getBnbMintPrice, getCurrencyPrice } from "../../utils/nftController";

const currencies = [
  { name: 'BNB', icon: "bnb", _id: 100},
  { name: 'USDT', icon: "usdt", _id: 0},
  { name: 'BUSD', icon: "usd", _id: 1},
]

export default function ListBox({ selected, setSelected, signer, mintAmount}) {
  const [bnbMintPrice, setBnbMintPrice] = useState("");
  const [USDTMintPrice, setUSDTMintPrice] = useState("");
  const [loadingPrice, setLoadingPrice] = useState(true);

  useEffect(() => {
    if (bnbMintPrice === null || bnbMintPrice === ""){
      
    } else if (USDTMintPrice !== null && USDTMintPrice !== ""){
      setLoadingPrice(false);
    }
   }, [bnbMintPrice, USDTMintPrice])

   useEffect(() => {
    const getPrice = async () => {
        setBnbMintPrice(await getBnbMintPrice(signer));
        setUSDTMintPrice(await getCurrencyPrice(currencies[1]._id, signer));
      }
      
      if (signer !== undefined) {
        getPrice();
      }
      
   }, [signer])

  return (
    <div className="w-72 pb-10">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="flex items-center relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 border-2 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
            />
            </span>
            {
              loadingPrice === true
              ?
              <span className="block py-2 text-black text-l pl-10">
                {selected.name}
                {
                selected._id === 100
                ?
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                  <Bnb size="25" />
                </div>

                :
                selected._id === 0
                ?
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                  <Usdt size="25" />
                </div>
                :
                selected._id === 1
                ?
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                  <Usdc size="25" />
                </div>
                :
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                <Btcp size="25" />
                </div>
                }   
              </span> 
              :
              <span className="block py-2 text-black text-l pl-10">
                {selected.name} ({selected._id === 100 ? bnbMintPrice*mintAmount : USDTMintPrice*mintAmount} {selected.name})
                {
                selected._id === 100
                ?
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                  <Bnb size="25" />
                </div>

                :
                selected._id === 0
                ?
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                  <Usdt size="25" />
                </div>
                :
                selected._id === 1
                ?
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                  <Usdc size="25" />
                </div>
                :
                <div className="flex absolute inset-y-0 right-0 items-center pr-3"> 
                <Btcp size="25" />
                </div>
                }   
              </span> 
            }                   
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {currencies.map((coin, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-[#FA98BA] text-gray-900' : 'text-gray-900'
                    }`
                  }
                  value={coin}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {coin.name}
                      </span>
                      <Icon className="flex absolute inset-y-0 right-0 items-center pr-2 pt-2" name={coin.icon} size={30} />
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#A6013B]">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}