import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © 2023 Thompson LLC. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#about"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
