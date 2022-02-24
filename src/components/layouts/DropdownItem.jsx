import { Transition } from "@headlessui/react"
import { useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import { useDispatch, useSelector } from "react-redux"
import { toggleTab } from "../../redux/sidebar/sidebarSlice"

function DropdownItem({ tabName, icon, dropdownContent, extraLabel }) {

	const sidebar = useSelector((state) => state.sidebar)

	const [dropdown, setDropdown] = useState({
		open: false
	})

	const [tooltip, setTooltip] = useState({
		show: false
	})

	const dispatch = useDispatch()

	const handleClick = () => {
		if (dropdownContent) {
			setDropdown(dropdown => ({ open: !dropdown.open }))
		}
		dispatch(toggleTab(tabName))
	}

	const visibleClass = "block sm:absolute sm:border border-sebg-secondary left-10 sm:text-sm sm:bg-primary sm:px-2 sm:py-1 sm:rounded"

	const activeClass = "bg-secondary text-gray-200"
	const expandedClass = "border-l border-gray-400 text-gray-200 ml-4 pl-4"
	const shrinkedClass = "sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-primary sm:rounded-md sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-28"

	return (
		<>
			<div className="relative">

				{/* Dropdown Head */}
				<div className={`flex items-center hover:text-gray-200 hover:bg-secondary 
					space-x-2 rounded-md cursor-pointer justify-between p-2 
					${sidebar.full ? 'justify-start' : 'sm:justify-center'}
					${sidebar.active === tabName ? activeClass : 'text-gray-100'}`}
					onClick={handleClick} 
					onMouseEnter={() => setTooltip({show: true})}
					onMouseLeave={() => setTooltip({show: false})}>
					<div className="relative flex space-x-2 items-center">
						{icon}
						<Transition show={sidebar.full}
							enter="duration-300 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">

							<h1>{tabName}</h1>

						</Transition>
						{
							(!sidebar.full && !dropdown.open) &&
							<h1 className={`${tooltip.show ? visibleClass : 'sm:hidden'}`}>{tabName}</h1>

						}
					</div>
					{
						extraLabel &&
						<h1 className={`w-5 h-5 p-1 ${extraLabel.color} rounded-sm text-sm leading-3 text-center text-gray-200 ${!sidebar.full && 'sm:hidden'}`}>{extraLabel.count}</h1>
					}


					{/* Dropdown Arrow Icon */}
					{
						dropdownContent &&
						<svg xmlns="http://www.w3.org/2000/svg"
							className={`h-4 w-4 ${!sidebar.full && 'sm:hidden'}`}
							viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd" />
						</svg>
					}

				</div>
				{/* Dropdown Content */}
				{
					(dropdownContent && dropdown.open) &&
					<ClickAwayListener onClickAway={() => setDropdown({ active: false })}>

						<div className={`text-gray-100 space-y-3 ${sidebar.full ? expandedClass : shrinkedClass}`}>
							{dropdownContent}
						</div>

					</ClickAwayListener>
				}


			</div>
		</>
	)
}

export default DropdownItem