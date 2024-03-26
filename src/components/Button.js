import classNames from "classnames"

function Button({ children, text, variant = "default"}) {
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center px-4 rounded m-2" : true,
            "bg-gray-100" : variant === "default",
            "bg-green-400" : variant === "success",
            "bg-red-400" : variant === "danger",
            "bg-yellow-400" : variant === "warning",
        })}>{ children }</button>
    )
}

export default Button
