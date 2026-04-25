export default function Header() {
    const menu = ["Asosiy", "Yangiliklar", "Kurslar", "Kutubxona", "Bog'lanish"];

    return (
        <header className="bg-[#1e1e1e] border-b border-gray-800 px-8 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="text-white font-bold text-xl flex items-center gap-1">
                        <span className="text-white">Uz</span>Chess
                    </div>
                    <select className="bg-transparent text-gray-400 text-sm outline-none">
                        <option>O'zbekcha</option>
                    </select>
                </div>

                <nav className="flex gap-8">
                    {menu.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`text-sm ${item === "Kurslar" ? "text-white " : "text-gray-400"} hover:text-white `}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6 text-gray-400">
                    <button className=""></button>
                    <button className=""></button>
                    <button className=""></button>
                    <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
                        <span className="text-sm text-white">Jasurbek Pulatov</span>

                    </div>
                </div>
            </div>
        </header>
    );
}