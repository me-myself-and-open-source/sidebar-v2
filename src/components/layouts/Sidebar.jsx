import { useDispatch, useSelector } from "react-redux"
import { toggleNavOpen, toggleSidebarFull, toggleTab } from "../../redux/sidebar/sidebarSlice"
import DropdownItem from "./DropdownItem"

function Sidebar() {

	const sidebar = useSelector((state) => state.sidebar)
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

			<div className={`h-screen bg-gray-900 transition-all duration-300 space-y-2 fixed sm:relative 
				${sidebar.full ? 'w-64' : 'w-64 sm:w-20'} 
				${sidebar.navOpen ? 'top-0 left-0' : 'top-0 -left-64 sm:left-0 '} `}>

				<h1 className={`font-black text-white py-4 ${sidebar.full ? 'text-2xl px-4' : 'text-xl px-4 sm:px-2'}`}>LOGO</h1>

				<div className="px-4 space-y-2">

					{/* Sidebar Toggle */}
					<button onClick={() => dispatch(toggleSidebarFull())}
						className="hidden sm:block focus:outline-none absolute p-1 -right-3 top-10 bg-gray-900 rounded-full shadow-md">
						<svg xmlns="http://www.w3.org/2000/svg"
							className={`h-4 w-4 transition-all duration-300 text-white transform ${sidebar.full ? 'rotate-90' : '-rotate-90'}`}
							fill="none" viewBox="0 0 20 20" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
						</svg>
					</button>

					{/* Home */}
					<DropdownItem tabName="Dashboard" icon={
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					} />

					{/* Audience */}
					<DropdownItem tabName="Audience" icon={
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
						</svg>
					} dropdownContent={
						<>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 1</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 2</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 3</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 4</h1>
						</>
					} />

					{/* Posts */}
					<DropdownItem tabName="Posts" icon={
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					} extraLabel={{ count: 8, color: 'bg-green-400' }} />

					{/* Schedules */}
					<DropdownItem tabName="Schedules" icon={
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
					} extraLabel={{ count: 4, color: 'bg-pink-400' }} />

					{/* Promote */}
					<DropdownItem tabName="Promote" icon={
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
						</svg>
					} dropdownContent={
						<>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 1</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 2</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 3</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 4</h1>
						</>
					} />

				</div>

			</div>
		</>
	)
}

export default Sidebar