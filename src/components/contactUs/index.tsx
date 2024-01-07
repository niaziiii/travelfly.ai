import React from "react";

const imageUrl =
  "https://miro.medium.com/v2/resize:fit:1400/0*pF6DH6MxJHJdtfwx";
const ContactUsPage = () => {
  return (
    <>
      {/* head  */}
      <div className="w-full h-full">
        <div
          className="bg-cover bg-center min-h-72  flex justify-center items-center text-white overflow-hidden"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <div className="text-center">
            <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-shadow-lg">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      {/* content  */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
            Let's Connect​
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border shadow-sm border-gray-300 focus:ring-red-500 focus:border-red-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                placeholder="name@123.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-red-300 "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
