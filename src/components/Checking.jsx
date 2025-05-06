import { useState } from "react";
import { useCompoContext } from "../context/CompoentContext";

const Checking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { check, setCheck, setAvailableHotel } = useCompoContext();

  const checkHotels = () => {
    if (email && name) {
      setCheck(true);
      setTimeout(() => {
        setAvailableHotel(true);
        setCheckIn("");
        setCheckOut("");
        setGuest("");
        setName("");
        setEmail("");
        setCheck(false);
      }, 4000);
    } else {
      alert("Fill all the input fields");
    }
  };
  return (
    <div>
      <div className=" bg-white flex flex-col lg:flex-row gap-8 px-8 py-3 border shadow-2xl">
        <div className="">
          <h1 className="text-gray-400">CHECK-IN</h1>
          <input
            type="date"
            className="px-3 py-2 border mt-3 w-full"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="">
          <h1 className="text-gray-400">CHECK-OUT</h1>
          <input
            type="date"
            className="px-3 py-2 border mt-3 w-full"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="">
          <h1 className="text-gray-400">GUEST</h1>
          <select
            className="border mt-3 w-24 py-2 px-3"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
          >
            <option disabled value="">
              Please Choose an option
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="border mt-2 p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="border mt-2 p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="bg-[#2C4549] text-white px-4 py-10 text-center font-roboto tracking-wider"
          onClick={checkHotels}
        >
          {check ? (
            <div className="flex items-center gap-2 text-white">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Processing…
            </div>
          ) : (
            <span>CHECK AVAILABILITY</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Checking;
