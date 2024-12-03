import {
  FaCcAmex,
  FaCcMastercard,
  FaCcStripe,
  FaCcVisa,
  FaPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <p className="text-gray-400 mb-4">
            We are dedicated to bringing you the best shopping experience with a
            wide range of products and quality services.
          </p>
          <p className="text-gray-400">
            Easy Life Shopping © 2024 , All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">About Us</p>
            </li>
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">Contact Us</p>
            </li>
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">Privacy Policy</p>
            </li>
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">
                Terms & Conditions
              </p>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-xl font-bold mb-4">Customer Service</h2>
          <ul className="space-y-2 ">
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">
                Shipping & Returns
              </p>
            </li>
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">Track Order</p>
            </li>
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">FAQs</p>
            </li>
            <li className="hover:cursor-pointer">
              <p className="hover:underline text-gray-400">Support Center</p>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md text-gray-500 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="container mx-auto mt-8 ">
        <h2 className="text-lg font-bold mb-4 text-center">We Accept</h2>
        <div className="flex justify-center items-center space-x-6 py-4">
          <div className="hover:cursor-pointer">
            <FaPaypal size={50} />
          </div>
          <div className="hover:cursor-pointer">
            <FaCcVisa size={50} />
          </div>
          <div className="hover:cursor-pointer">
            <FaCcMastercard size={50} />
          </div>
          <div className="hover:cursor-pointer">
            <FaCcAmex size={50} />
          </div>
          <div className="hover:cursor-pointer">
            <FaCcStripe size={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
