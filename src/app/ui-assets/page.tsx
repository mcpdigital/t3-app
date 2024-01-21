// import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  ButtonTeal,
  ButtonBlue,
  ButtonRed,
  ButtonGold,
  ButtonTealS,
  ButtonBlueS,
  ButtonRedS,
  ButtonGoldS,
} from "~/components/ui/buttons";

const uiassets = () => {
  return (
    <div className="flex ">
      <div>
        <nav className="fixed ml-0 mt-0 flex w-full justify-between bg-gray-200 p-2">
          <div className="flex gap-2">
            <button
              type="button"
              className={ButtonTeal + " first-of-type:ml-2"}
            >
              Approve
            </button>

            <button type="button" className={ButtonBlue}>
              Button Blue
            </button>

            <button type="button" className={ButtonGold + " "}>
              Button Gold
            </button>
          </div>

          <button type="button" className={ButtonRed + " "}>
            Button Red
          </button>
        </nav>
      </div>

      <div className="fixed mt-16 flex w-full justify-between bg-gray-400 p-2">
        <div className="flex gap-2">
          <button type="button" className={ButtonTealS + " first-of-type:ml-2"}>
            Button Teal
          </button>

          <button type="button" className={ButtonBlueS}>
            Button Blue
          </button>

          <button
            type="button"
            className={
              ButtonGoldS +
              " group flex items-center justify-between gap-2 p-0.5 "
            }
          >
            <p>Gold</p>
            <span className="  group-hover:green-500 rounded-full border border-black bg-yellow-200 p-0.5 opacity-0 transition duration-300 group-hover:animate-spin group-hover:bg-yellow-300 group-hover:opacity-100 ">
              <Image
                src="/black-hole-3-svgrepo-com.svg"
                alt="Black Hole 3 SVG Repo"
                width={15}
                height={15}
                priority
              />
            </span>
          </button>
        </div>

        <button
          type="button"
          className={
            ButtonRedS +
            " group flex items-center justify-center gap-2 hover:opacity-100"
          }
        >
          <h1>Red Button</h1>
          <span className="  rounded-full bg-yellow-200 p-0.5 transition duration-300 group-hover:rotate-90 group-hover:bg-green-500">
            <Image
              src="/arrow-up-svgrepo-com.svg"
              alt="Vercel Logo"
              width={15}
              height={15}
              priority
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default uiassets;
