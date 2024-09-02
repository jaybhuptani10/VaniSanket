function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-left">
          Hello! I'm Jay Bhuptani, a dedicated college student passionate about MERN STACK development. I’ve crafted various projects using NextJs, MongoDB, Express.js, React, and Node.js, equipping me to build dynamic web applications.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
            target="_blank"
          
             href="https://www.linkedin.com/in/jay-bhuptani-566343194/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
            target="_blank"
              href="https://github.com/jaybhuptani10"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
            target="_blank"
              href="https://www.instagram.com/jaybhuptani_10?igsh=MXJpNWMyOXJyc3NnNg=="
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Ahmedabad, India</p>
          
          <p>Email: jaybhuptani@outlook.com</p>
          <p>Phone: 7272833841</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 . All rights reserved.</p>
    </footer>
  )
}

export default Footer;
