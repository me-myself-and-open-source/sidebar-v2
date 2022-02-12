import { useState } from "react"

function Sidenav() {
    const activeClass = 'bg-gray-800 text-gray-200'
	const expandedClass = 'border-l border-gray-400 ml-4 pl-4'
	const shrinkedClass = 'sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-28'
	const sub_expandedClass = 'border-l border-gray-400 ml-4 pl-4'
	const sub_shrinkedClass = 'sm:absolute top-0 left-28 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-28'
	const visibleClass = 'block sm:absolute -top-7 sm:border border-gray-800 left-5 sm:text-sm sm:bg-gray-900 sm:px-2 sm:py-1 sm:rounded-md'

	const [sidebar, setSidebar] = useState({
		full: false,
		active: 'home',
		navOpen: false
	})

	const [dropdown, setDropdown] = useState({
		open: false,
	})

	const [subDropdown, setSubDropdown] = useState({
		sub_open: false,
	})

	const [tooltip, setTooltip] = useState({
		show: false,
		visibleClass: 'block sm:absolute -top-7 sm:border border-gray-800 left-5 sm:text-sm sm:bg-gray-900 sm:px-2 sm:py-1 sm:rounded-md'
	})

	function toggleDropdown(tab) {
		setDropdown(previousState => ({ ...previousState, open: !previousState.open }))
		setSidebar(previousState => ({ ...previousState, active: tab }))
	}

	function toggleSubDropdown() {
		setSubDropdown(previousState => ({ ...previousState, sub_open: !previousState.sub_open }))
	}

	function toggleNav() {
		setSidebar(previousState => ({ ...previousState, navOpen: !previousState.navOpen }))
	}

	return (
		<>
			{/* Mobile Menu Toggle */}
			<button onClick={toggleNav}
				className="sm:hidden absolute top-5 right-5 focus:outline-none">
				{/* Menu Icons */}
				<svg xmlns="http://www.w3.org/2000/svg"
					className={`h-6 w-6 ${sidebar.navOpen ? 'hidden' : ''}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16m-7 6h7" />
				</svg>

				{/* Close Menu */}
				<svg x-cloak="true"
					xmlns="http://www.w3.org/2000/svg"
					className={`h-6 w-6 ${sidebar.navOpen ? '' : 'hidden'}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<div className={`h-screen bg-gray-900 transition-all duration-300 space-y-2 fixed sm:relative 
				${sidebar.full && 'w-64'} 
				${!sidebar.full && 'w-64 sm:w-20'} 
				${sidebar.navOpen && 'top-0 left-0'} 
				${!sidebar.navOpen && 'top-0 -left-64 sm:left-0'}`}>

				<h1
					className={`text-white font-black py-4 
						${sidebar.full ? 'text-2xl px-4' : 'text-xl px-4 xm:px-2'}`}>
					LOGO
				</h1>

				<div className="px-4 space-y-2">

					{/* SideBar Toggle */}
					<button onClick={setSidebar(previousState => ({ ...previousState, full: !previousState.full }))}
						className="hidden sm:block focus:outline-none absolute p-1 -right-3 top-10 bg-gray-900 rounded-full shadow-md">
						<svg xmlns="http://www.w3.org/2000/svg"
							className={`h-4 w-4 transition-all duration-300 text-white transform ${sidebar.full ? 'rotate-90' : '-rotate-90 '}`}
							viewBox="0 0 20 20"
							fill="currentColor">
							<path fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd" />
						</svg>
					</button>
					{/* Home */}
					<div x-data="tooltip"
						onClick={setSidebar(previousState => ({ ...previousState, active: 'home' }))}
						className={
							`relative flex items-center hover:text-gray-200 hover:bg-gray-800 space-x-2 rounded-md p-2 cursor-pointer
							${sidebar.full && 'justify-start'} 
							${!sidebar.full && 'sm:justify-center'} 
							${(sidebar.active == 'home') && 'text-gray-200 bg-gray-800'} 
							${(sidebar.active != 'home') && 'text-gray-400'} `}>
						<svg xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
						<h1 x-cloak
							className={`${!sidebar.full ? visibleClass : '' || !sidebar.full ? 'sm:hidden' : ''}`}>
							Dashboard</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidenav