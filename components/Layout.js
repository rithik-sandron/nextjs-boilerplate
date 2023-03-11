export default function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1em',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '600px',
        width: '80%',
        margin: '0 auto',
        height: '100vh'
      }}>
      {children}
    </div>
  );
}