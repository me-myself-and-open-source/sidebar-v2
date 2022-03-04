import { useDispatch, useSelector } from "react-redux"
import { toggleNavOpen, toggleSidebarFull } from "../../redux/sidebar/sidebarSlice"
import DropdownItem from "./DropdownItem"

import { HomeIcon, BookmarkIcon, EyeIcon, CollectionIcon, ShareIcon, SunIcon, MoonIcon } from '@heroicons/react/solid'

function Sidebar() {

	const sidebar = useSelector((state) => state.sidebar)
	const darkMode = useSelector((state) => state.darkMode)
	const dispatch = useDispatch()

	return (
		<>
			{/* Mobile Menu Toggle */}
			<button className="sm:hidden absolute top-5 right-5 focus:outline-none"
				onClick={() => dispatch(toggleNavOpen())}>
				{/* Menu Icon */}
				{
					!sidebar.navOpen &&
					<svg xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				}

				{/* Menu close */}
				{
					sidebar.navOpen &&
					<svg xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				}

			</button>

			<div className={`h-screen bg-light-primary dark:bg-dark-primary transition-all duration-300 space-y-2 fixed sm:relative 
				${sidebar.full ? 'w-64' : 'w-64 sm:w-14'} 
				${sidebar.navOpen ? 'top-0 left-0' : 'top-0 -left-64 sm:left-0 '} `}>

				<h1 className={`font-black text-white py-4 ${sidebar.full ? 'text-3xl px-4' : 'text-sm px-4 sm:px-2'}`}>LOGO</h1>

				<div className="px-2 space-y-2">

					{/* Sidebar Toggle */}
					<button onClick={() => dispatch(toggleSidebarFull())}
						className="hidden sm:block focus:outline-none absolute p-1 -right-3 top-10 bg-light-primary dark:bg-dark-primary rounded-full shadow-md">
						<svg xmlns="http://www.w3.org/2000/svg"
							className={`h-4 w-4 transition-all duration-300 text-white transform ${sidebar.full ? 'rotate-90' : '-rotate-90'}`}
							fill="none" viewBox="0 0 20 20" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
						</svg>
					</button>

					{/* Home */}
					<DropdownItem tabName="Dashboard" icon={
						<HomeIcon className="h-6 w-6" />
					} />

					{/* My feed */}
					<DropdownItem tabName="My feed" icon={
						<CollectionIcon className="h-6 w-6" />
					} dropdownContent={
						<>
							<h1 className="hover:text-gray-200 cursor-pointer">Popular</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Most upvoted</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Best discussions</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Search</h1>
						</>
					} />

					{/* Bookmarks */}
					<DropdownItem tabName="Bookmarks" icon={
						<BookmarkIcon className="h-6 w-6" />
					} extraLabel={{ count: 8, color: 'bg-indigo-700' }} />

					{/* Reading history */}
					<DropdownItem tabName="Reading history" icon={
						<EyeIcon className="h-6 w-6" />
					} extraLabel={{ count: 4, color: 'bg-pink-600' }} />

					{/* Share */}
					<DropdownItem tabName="Share" icon={
						<ShareIcon className="h-6 w-6" />
					} dropdownContent={
						<>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 1</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 2</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 3</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 4</h1>
						</>
					} />

					<DropdownItem darkModeToggle={true} tabName={
						`${darkMode.isDarkMode
							? 'Light'
							: 'Dark'} Mode`
					} icon={
						darkMode.isDarkMode
							? <SunIcon className="h-6 w-6" />
							: <MoonIcon className="h-6 w-6" />
					} />

				</div>

			</div>
		</>
	)
}

export default Sidebar