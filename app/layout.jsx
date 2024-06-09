
import { Inter } from "next/font/google";
import "./globals.css";
import header from './header';


export const metadata= {
  title: "AB Praxis",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>

          <header />,
          {children}
      
      </body>
    </html>
  )
}
