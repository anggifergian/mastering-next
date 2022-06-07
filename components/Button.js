const Button = ({ label }) => {
  return (
    <div className="px-6 py-4 rounded bg-blue-500">
      <p className="font-semibold text-white">{label}</p>
    </div>
  )
}

export default Button