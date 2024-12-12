import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg text-primary font-medium">
              © 2023 Thompson LLC. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#services"
              className="text-md text-black hover:text-primary"
            >
              Services
            </Link>

            <Link
              href="#about"
              className="text-md text-black hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-md text-black hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
