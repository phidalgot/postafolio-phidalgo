import Link from 'next/link'
export default function Botonlink({ color, texto, enlace = '/' }) {
  return (
    <>
      <Link href={enlace}>
        <a>
          <span>{texto}</span>
        </a>
      </Link>

      <style jsx>{`
        a {
          align-items: center;
          margin: 2rem 0 0 0;
          padding: 0.5rem;
          max-width: 60%;
          font-size: 1.2rem;
          text-align: center;
          background-color: ${color};
          border-radius: 3rem;
        }
        a:hover {
          background-color: var(--hover-color);
        }
        span {
          color: var(--white-color);
          filter: drop-shadow(5px 5px 5px black);
        }
        @media screen and (max-width: 768px) {
          a {
            font-size: 0.9rem;
          }
        }
      `}</style>

      
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </>
  )
}
