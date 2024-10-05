import React from 'react';

const Form = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 py-12">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-16">
          {/* Fullname */}
          <div>
            <label className="block text-2xl font-poppins font-medium text-black mb-2">
              Fullname
            </label>
            <input
              type="text"
              placeholder="e.g John Becker"
              className="w-full h-24 p-3 border border-gray-300"
            />
          </div>

          {/* Email */}
          <div>
          <label className="block text-2xl font-poppins font-medium text-black mb-2">
          Email
            </label>
            <input
              type="email"
              placeholder="johnbecker@gmail.com"
              className="w-full h-24 p-3 border border-gray-300"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
        <label className="block text-2xl font-poppins font-medium text-black mb-2 mt-16">
        Message
          </label>
          <textarea
            placeholder="message"
            rows="12"
            className="w-full p-3 border border-gray-300"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
