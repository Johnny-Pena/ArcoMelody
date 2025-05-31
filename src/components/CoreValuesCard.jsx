
const coreValuesArr = [
  {
    coreValueName: 'Joy',
    definition: 'Music is a source of joy and happiness. Let music spark joy in your life.',
  },
    {
    coreValueName: 'Connection',
    definition: 'We recognize music as a universal way to connect with others. We honor the relationships music builds, whether they are forged in performance, education, or enjoyment.',
  },
    {
    coreValueName: 'Purpose',
    definition: 'Driven by the belief that music is a lifelong journey, we strive to nurture creativity and keep students inspired. ',
  },
    {
    coreValueName: 'Growth',
    definition: 'We value every step of the learning process and believe that everyone can grow as a musician. We are committed to helping others no matter where they are in their musicial journey.',
  },
]

export default function CoreValuesCard() {
  return (
    <>
      {coreValuesArr.map(({ coreValueName, definition }, index) => (
        <div key={index} className="card card-border bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title text-accent text-4xl font-bold">{coreValueName}</h2>
            <p>{definition}</p>
          </div>
        </div>
      ))}
    </>
  );
}