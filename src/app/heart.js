import * as React from "react"
const Heart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    viewBox="0 0 1063 1000"
    {...props}
  >
    <path
      fill="red"
      d="M775 1q126 0 207 80t81 207v60q0 285-532 653Q0 634 0 348v-60Q0 161 80.5 81T287 1q81 0 134 30.5T531 130q58-68 111-98.5T775 1z"
    />
  </svg>
)
export default Heart