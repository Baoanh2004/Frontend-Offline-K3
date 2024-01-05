import { ToastContainer } from "react-toastify"
import "./globals.css"
import Provider from "~/Providers/ThemeProvider"
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ToastContainer />
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
