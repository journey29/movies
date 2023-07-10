import { Navigation } from './navigation/Navigation'
import { Suspense } from 'react'


function App() {
  return (
    <Navigation />
  )
}

export default function WrappedApp() {
  return <Suspense>
    <App />
  </Suspense>
}
