import { NavLink } from "react-router-dom"

interface MenuItemInterface {
    to: string;
    text: string;
}

export const MenuItem = (props: MenuItemInterface) => {
    return (
        <li>
            <NavLink to={props.to}>
                <p>{ props.text }</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    className="w-6 h-6 arrow"
                    viewBox="0 0 8 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                </svg>
            </NavLink>
        </li>
    )
}