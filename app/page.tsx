'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen pt-16">
        <Image
          src="/images/hero.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upload fingerprint to Check
          </h1>
          <p className="text-lg md:text-xl mb-6">
            New way of Detecting Blood Group with Fingerprint
          </p>

          <div className="flex space-x-4">
            <Link
              href="/get-started"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Get Started
            </Link>
            <Link
              href="/watch-video"
              className="bg-transparent border-2 border-white py-2 px-4 rounded text-white"
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>

      {/* Box Model */}
      <section className="flex justify-center space-x-6 p-8 bg-gray-100">
        {[
          {
            icon: "/icons/icon1.svg",
            title: "Lorem Ipsum",
            text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
          },
          {
            icon: "/icons/icon2.svg",
            title: "Dolor Sit Amet",
            text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
          },
          {
            icon: "/icons/icon3.svg",
            title: "Sed ut Perspicitatis",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
          },
        ].map((box, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-60 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <img src={box.icon} alt={`Icon ${index + 1}`} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {box.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{box.text}</p>
          </div>
        ))}
      </section>

      {/* Image Upload */}
      <div className="flex flex-col items-center justify-center p-6 rounded-md shadow-lg mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">
          Predict Blood Group
        </h2>
        {selectedImage ? (
          <div className="relative w-40 h-40 mb-4 border border-gray-300 rounded-md overflow-hidden">
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Uploaded fingerprint preview"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-40 h-40 mb-4 bg-gray-200 border border-dashed border-gray-400 rounded-md text-gray-400">
            No Image Selected
          </div>
        )}
        <label
          htmlFor="file-upload"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-3"
        >
          Choose Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
          Predict Blood Group
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bloodgroup Detector</h3>
            <p className="text-gray-400">
              A seamless way to predict your blood type using fingerprint
              analysis. Empowering individuals with quick, AI-based detection.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Follow us on social media for updates.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Bloodgroup Detector. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
