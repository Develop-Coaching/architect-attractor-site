export default function Footer() {
  return (
    <footer className="bg-dc-dark border-t-4 border-dc-yellow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-extrabold text-white text-lg">
              <span className="text-dc-yellow">Architect</span> Attractor
            </p>
            <p className="text-gray-500 text-sm mt-1">
              by Develop Coaching
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="mailto:hello@developcoaching.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Develop Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
