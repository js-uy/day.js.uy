import RetinaImage from 'react-retina-image'

export default () => (
  <main>
    <style jsx>{`
      main {
        background-color: #101010;
        color: #fff;
        display: flex;
        max-width: 100vw;
        min-height: 100vh;
        min-width: 100vw;

        align-items: center;
        flex-direction: column;
        justify-content: center;
      }

      h2 {
        color: #ffffff;
        font-family: sans-serif;
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
    `}</style>

    <RetinaImage src="/static/js-day.png" />

    <h2>
      Coming soon...
    </h2>
  </main>
)
