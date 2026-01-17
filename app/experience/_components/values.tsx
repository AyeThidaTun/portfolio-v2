export default function Values() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-center font-semibold mb-10">
          My Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10 justify-center text-center">
          <h3 className="text-md font-semibold mb-4 bg-blue-50 p-5 rounded-md">
            Integrity
          </h3>
          <h3 className="text-md font-semibold mb-4 bg-blue-50 p-5 rounded-md">
            Responsibility
          </h3>
          <h3 className="text-md font-semibold mb-4 bg-blue-50 p-5 rounded-md">
            Resilience
          </h3>
        </div>
      </div>
    </section>
  );
}
