function SvgComponent(props) {
    return (
      <svg
        height={96}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
      >
        <path d="M0 0c16.667 66 33.333 99 50 99s33.333-33 50-99v100H0V0z" />
      </svg>
    )
  }
  
  export default SvgComponent