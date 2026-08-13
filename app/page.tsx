export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-gray-900">
          Next.js DevOps Monitoring
        </h1>

        <p className="mt-3 text-gray-600">
          GitHub → Jenkins → Docker → Prometheus → Grafana
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">
              Application
            </h2>
            <p className="mt-2 text-gray-600">
              Next.js
            </p>
            <p className="mt-4 text-green-600">
              ● Running
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">
              CI/CD
            </h2>
            <p className="mt-2 text-gray-600">
              Jenkins
            </p>
            <p className="mt-4 text-green-600">
              ● Pipeline Active
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">
              Monitoring
            </h2>
            <p className="mt-2 text-gray-600">
              Prometheus + Grafana
            </p>
            <p className="mt-4 text-green-600">
              ● Monitoring Active
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow">
          <h2 className="text-2xl font-bold">
            DevOps Pipeline
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-3">

            <span className="rounded-lg bg-gray-900 px-4 py-2 text-white">
              GitHub
            </span>

            <span>→</span>

            <span className="rounded-lg bg-gray-900 px-4 py-2 text-white">
              Jenkins
            </span>

            <span>→</span>

            <span className="rounded-lg bg-gray-900 px-4 py-2 text-white">
              Docker
            </span>

            <span>→</span>

            <span className="rounded-lg bg-gray-900 px-4 py-2 text-white">
              Docker Hub
            </span>

            <span>→</span>

            <span className="rounded-lg bg-gray-900 px-4 py-2 text-white">
              Prometheus
            </span>

            <span>→</span>

            <span className="rounded-lg bg-gray-900 px-4 py-2 text-white">
              Grafana
            </span>

          </div>
        </div>

      </div>
    </main>
  );
}
