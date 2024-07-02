import React from "react";

const JoinUsSection = () => {
  return (
    <section className="w-[100%]">
      <div className="max-w-[1370px] mx-auto bg-white">
        <div className="join-us bg-indigo-700 py-[75px]">
          <h1 className="text-center sm:text-4xl text-3xl text-white py-[30px]">
            Join With Over 100k Members
          </h1>
          <p className="text-center sm:text-xl text-sm text-white opacity-80 px-[10px]">
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers <br /> ambushed her, made
            her drunk with Longe and Parole and dragged her into their agency,
            where they <br />
            abused her for their.
          </p>
          <button></button>
        </div>

        <div className="contact-form bg-blue-100 grid lg:grid-cols-[60%_40%] grid-cols-1">
          <div className="py-[100px] sm:px-[50px] px-[20px]">
            <form class="max-w-md mx-auto bg-white sm:px-[30px] px-[10px] rounded-sm py-[20px]">
              <h1 className="text-center sm:text-2xl text-xl pb-[20px]">Get In Touch</h1>
              <div class="mb-5 px">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="email"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="email"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <textarea
                  id="email"
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="detail sm:pt-[100px] pb-[50px] max-w-sm mx-auto">
            <div className="email py-[20px]">
              <h1 className="text-xl opacity-70">Email</h1>
              <p className="opacity-70">xyz@gmail.com</p>
            </div>
            <div className="email py-[20px]">
              <h1 className="text-xl opacity-70">Phone</h1>
              <p className="opacity-70">+9219408302</p>
            </div>
            <div className="email py-[20px]">
              <h1 className="text-xl opacity-70">Fax</h1>
              <p className="opacity-70">+9131212121</p>
            </div>
            <div className="email pt-[20px]">
              <h1 className="text-xl opacity-70">Address</h1>
              <p className="opacity-70">San Francisco, CA</p>
              <p className="opacity-70">4th Floor8 Lower</p>
              <p className="opacity-70">San Francisco street, M1 50F</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
