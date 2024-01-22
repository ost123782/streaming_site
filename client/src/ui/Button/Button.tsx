function Button({children} : {children: JSX.Element}) {
  return (
    <button className="text-blue-900">{children}</button>
  )
}

export default Button