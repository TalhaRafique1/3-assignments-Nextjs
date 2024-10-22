

const Header = () => {
  return (
    <header>
        <div className="bg-black text-yellow-50 ">
            <ul className="flex space-x-5">
                <li>
                    <a href="/" className="text-white text-lg">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-white text-lg" >About</a>
                </li>
                <li>
                    <a href="/contact" className="text-white text-lg">Contact</a>
                </li>
                <li>
                    <a href="/skill" className="text-white text-lg">Skill</a>
                </li>
                <li>
                    <a href="/Portofolio" className="text-white text-lg">Portofolio</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
