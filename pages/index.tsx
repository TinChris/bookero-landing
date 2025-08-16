
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Bookero – Online Appointment Booking</title>
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Buchungen, die sich von selbst erledigen.</h1>
        <p className="text-xl mb-8">Bookero ist dein smarter Assistent für Terminbuchungen. Perfekt für Kosmetiker*innen, Coaches, Friseur*innen und mehr.</p>
        <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
          Jetzt vormerken lassen
        </a>
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Bookero. All rights reserved.
      </footer>
    </div>
  )
}
