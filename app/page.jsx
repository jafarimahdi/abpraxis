import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (

    <div className="flex flex-col min-h-[100dvh]">

      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-50">
                  Exceptional Care for Your Health
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Our experienced general practitioner is dedicated to providing personalized, comprehensive healthcare
                  services to patients of all ages.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm font-medium text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Book an Appointment
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:ring-gray-300"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div>
                <img src="/imga.jpg" width="500" height="400" alt="Doctor" className="mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                We offer a wide range of healthcare services to meet your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <HeartPulseIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">General Check-ups</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular check-ups to monitor your overall health and catch any issues early.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <SyringeIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Vaccinations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ensure you and your family are up-to-date on all necessary vaccinations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <ClipboardIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Chronic Disease Management</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive care for managing chronic conditions like diabetes, hypertension, and more.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <PillIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Medication Management</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ensure you're taking the right medications at the right times for optimal health.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <StethoscopeIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Diagnostic Testing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access to a wide range of diagnostic tests to identify and address any health concerns.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <LigatureIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Minor Injury Treatment</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prompt care for sprains, cuts, and other minor injuries to help you heal quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-blue-600" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 hover:text-blue-600" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function HeartPulseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}


function LigatureIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" />
      <path d="M6 12h4" />
      <path d="M14 12h2v8" />
      <path d="M6 20h4" />
      <path d="M14 20h4" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PillIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  )
}


function StethoscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}


function SyringeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  )
}
