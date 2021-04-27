import styles from "./Spinner.module.css";


export default function Spinner() {
  return (
    <>
      <div className={styles.spinner}></div>

      {/* <style global jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0, 1);
          width: 36px;
          height: 36px;
          borderradius: 50%;
          border-left-color: '#9f';
          animation: 'spin 1s ease-infinite';
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style> */}
    </>
  )
}
