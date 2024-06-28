import React from "react";
import Button from "./Button";

const JoinUsSection = () => {
  return (
    <section className="join-and-contact">
      <div className="join-content flex flex-col justify-center items-center bg-blue-700">
        <h1 className="text-4xl text-white p-10">
          Join With Over 100K Members
        </h1>
        <p className="text-center text-white opacity-70">
          But nothing the copy said could convince her and so it didn’t take
          long until a few insidious Copy Writers <br /> ambushed her, made her
          drunk with Longe and Parole and dragged her into their agency, where
          they <br />
          abused her for their.
        </p>
        <div className="p-10">
          <Button isBorder={false} color="bg-black" text="white">
            Get Started
          </Button>
        </div>
      </div>
      <div className="form-and-detail flex justify-center items-center pt-20 bg-blue-100">
        <div className="form border-2 w-[550px] bg-white mb-20">
          <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-12 lg:px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-2xl  leading-9 tracking-tight text-gray-900">
                Get In Touch
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Write a message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="email"
                      name="email"
                      required
                      className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex justify-start bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="detail px-20">
          <div className="email mb-10">
            <h2 className="opacity-60">Email</h2>
            <p className="opacity-80">xyz@gmail.com</p>
          </div>

          <div className="phone mb-10">
            <h2 className="opacity-60">Phone</h2>
            <p className="opacity-80">+30 976 1382 9921</p>
          </div>

          <div className="fax mb-10">
            <h2 className="opacity-60">FAX</h2>
            <p className="opacity-80">+30 976 1382 9922</p>
          </div>

          <div className="address mb-10">
            <h2 className="opacity-60">ADDRESS</h2>
            <p className="opacity-80">San Francisco, CA</p>
            <p className="opacity-80">4th Floor8 Lower</p>
            <p className="opacity-80">San Francisco street, M1 50F</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
