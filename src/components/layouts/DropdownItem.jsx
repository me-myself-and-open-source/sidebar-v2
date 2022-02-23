import { useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import { useDispatch, useSelector } from "react-redux"
import { toggleTab } from "../../redux/sidebar/sidebarSlice"

function DropdownItem({ tabName, icon }) {

	const sidebar = useSelector((state) => state.sidebar)

	const [dropdown, setDropdown] = useState({
		open: false
	})

	const dispatch = useDispatch()

	const handleClick = () => {
		setDropdown(dropdown => ({ open: !dropdown.open }))
		dispatch(toggleTab(tabName))
	}

	const activeClass = "bg-gray-800 text-gray-200"
	const expandedClass = "border-l border-gray-400 text-gray-200 ml-4 pl-4"
	const shrinkedClass = "sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-gray-900 sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-28"

	return (
		<>
			<div className="relative">

				{/* Dropdown Head */}
				<div className={`flex items-center hover:text-gray-200 hover:bg-gray-800 
					space-x-2 rounded-md cursor-pointer justify-between p-2 
					${sidebar.full ? 'justify-start' : 'sm:justify-center'}
					${sidebar.active === tabName ? 'text-gray-200 bg-gray-800' : 'text-gray-400'}`}
					onClick={handleClick}>
					<div className="relative flex space-x-2 items-center">
						{icon}
						<h1 className={`${!sidebar.full && 'sm:hidden'}`}>{tabName}</h1>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg"
						className={`h-4 w-4 ${!sidebar.full && 'hidden'}`}
						viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd" />
					</svg>
				</div>
				{/* Dropdown Content */}
				{
					dropdown.open &&
					<ClickAwayListener onClickAway={() => setDropdown({active: false})}>

						<div className={`text-gray-400 space-y-3 ${sidebar.full ? expandedClass : shrinkedClass}`}>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 1</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 2</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 3</h1>
							<h1 className="hover:text-gray-200 cursor-pointer">Item 4</h1>
						</div>

					</ClickAwayListener>
				}


			</div>
		</>
	)
}

export default DropdownItem