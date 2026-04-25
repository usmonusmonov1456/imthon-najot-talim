
import './globals.css'
import Header from './components/Header'
import CourseCard from "./components/CourseCard";
import CourseCard2 from "./components/CourseCard2"
import Sidebar3 from "@/app/components/Sidebar3";
import Sidebar4 from "@/app/components/Sidebar4";
import Orta1 from "@/app/components/Orta1"
import News from "./components/News"

export default function RootLayout({ children }) {
    return (
        <html lang="uz">
        <body className="bg-black">
        <Header />
<CourseCard/>
        <CourseCard2/>
<Sidebar3/>
        <Sidebar4/>
<Orta1/>
<News/>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}