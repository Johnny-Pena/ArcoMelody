export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      <h3 className="text-3xl font-bold text-center mb-6">FAQs</h3>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseOne" className="peer" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Who are these lessons for?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <ul className="list-disc list-inside">
            <li className="mb-4 text-lg">Students ages 8+</li>
            <li className="mb-4 text-lg">Beginning to advanced students: from no experience playing music to a high level player looking to refine their skills.</li>
            <li className="mb-4 text-lg">Students looking for a teacher that has experience playing in a variety of genres including classical, contemporary, mariachi, fiddle, gospel, movie and video game music.</li>
            <li className="mb-4 text-lg">Students and families who want access to high quality lessons that are fun and engaging.</li>
          </ul>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseTwo" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Do online lessons work?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p>
            <b>YES!</b> Online lessons work and the platform helps students and
            teachers make connections from all over the world. With just your
            instrument, an internet connection, and the built-in webcam and
            microphone found on most laptops and smartphones, you're all set to
            embark on a fulfilling journey of virtual music lessons. Don't miss
            out on this exciting opportunity to learn and grow from the comfort
            of your own space!
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseThree" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Why should I pay for lessons when there are many FREE resources online?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p>
            I am excited that there are so many FREE resources for students to
            begin learning violin. However, having face-to-face instruction with
            a teacher guarantees that you will receive an experience tailored to
            your needs.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" id="flush-collapseFour" className="peer" />
        <div className="collapse-title text-xl font-medium bg-base-300 peer-checked:bg-base-100">
          Are certain people "gifted" at music making and should “non-gifted” students spend money on lessons?
        </div>
        <div className="collapse-content bg-base-100 peer-checked:bg-base-100">
          <p>
            All students can create beautiful music. Each musical journey is
            unique, reflecting the individuality of every student. I believe
            everyone should enjoy the process of making music—there’s no
            competition in art. Regardless of where you are on your journey, the
            benefits to your mental health are unmatched. I'm here to support
            you every step of the way!
          </p>
        </div>
      </div>
    </div>
  );
}