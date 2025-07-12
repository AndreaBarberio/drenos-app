
function ChargeSpinner() {
  return (
    <div className="flex flex-col text-blue-500 italic font-semibold items-center justify-center min-h-screen">
      <svg
        className="animate-spin h-10 w-10 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      Stiamo caricando la pagina
    </div>
  )
}
export default ChargeSpinner;