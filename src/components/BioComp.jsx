import { Link } from "react-router-dom";


export default function BioComp() {
  return (
    <>
    <div className="flex flex-col items-center px-4">
    <h1 className="text-center text-2xl font-bold mt-14 mb-6 md:text-5xl">Meet the Teachers</h1>

    <div className="hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
        <img
          src="/images/jennyDowntownAustin.jpg"
          className="w-full rounded-lg shadow-2xl sm:w-1/3"
          alt="Jenny Headshot"
        />
        <div className="lg:ml-8 w-full">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <h3 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-2 sm:mb-0">Jenny Peña</h3>
            <div className="badge badge-primary text-xs">Suzuki-Certified</div>
            <div className="badge badge-secondary text-xs">Bachelor of Music Degree</div>
            <div className="badge badge-info text-xs">15+ Years</div>
          </div>
          <p className="text-lg font-semibold text-accent mb-3">
            Violin & Viola • Ages 8-Adult
          </p>
          <div className="bg-base-200 p-4 rounded-lg mb-4">
            <p className="text-sm italic">
              💬 "Carmen, adult: 'Like alway I enjoy and learning new way to improve myself in learning the violin!! Love my teacher!!'
            </p>
          </div>
          <p className="py-3">
            Jenny Peña is a graduate of the University of Texas at San Antonio with a Bachelor’s degree in Music Education and a Suzuki-registered teacher since 2014. Jenny is a co-owner of a virtual music school, Arco Melody LLC. She opened Arco Melody with her husband, Johnny Peña, in November 2024.
          </p>
          <p className="py-3">
            She began playing the violin at the age of 7 through an after-school violin program at a local church in Laredo, TX. She continued to play violin throughout her middle and highschool years in her school's orchestra programs. Jenny once taught as a public school Elementary Music with Northside ISD in San Antonio, TX. She was in charge of teaching general music class to Kinder – 5 th grade students on campus and an after-school 5th-grade strings program.
          </p>
          <p className="py-3">
            She performs professionally around the Austin area with community orchestras and her violin/ duo with her husband, Duo Peña. Her professional associations include being a member of the Texas Music Educators Association and the Suzuki Association of the Americas.
          </p>
          <p className="py-3">
            Jenny has had the incredible opportunity to perform alongside world-renowned Mariachi Vargas de Tecalitlan on multiple occasions. She also had the opportunity to be a part of Rachel Podgers’, internationally renowned Baroque Violinist, residency at UTSA in2016. She took a master class and performed in various ensembles with Ms. Podger.
          </p>
          <p className="py-3">
            It is Jenny’s goal to continue to provide high-quality music instruction to her students through private instruction. She believes that everyone should have the opportunity to create beautiful music from the comfort of their own homes with virtual music lessons.
          </p>
          <Link to="/first-lesson" className="btn btn-primary btn-lg mt-6">Book Free Trial with Jenny</Link>
        </div>
      </div>
    </div>

    <div className="divider"></div> 

    <div className="hero bg-base-100 mb-6">
    <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
      <img
        src="/images/johnny-pena-headshot.jpg"
        className="w-full rounded-lg shadow-2xl sm:w-1/3"
        alt="Johnny Headshot"
      />
      <div className="lg:ml-8 w-full">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <h3 className="text-xl sm:text-2xl font-bold w-full sm:w-auto mb-2 sm:mb-0">Johnny Peña</h3>
          <div className="badge badge-primary text-xs">Master of Music Degree</div>
          <div className="badge badge-secondary text-xs">15+ Years</div>
          <div className="badge badge-info text-xs">Competition Winner</div>
        </div>
        <p className="text-lg font-semibold text-accent mb-3">
          Classical Guitar, Electric Guitar, and Ukulele • Ages 8-Adult
        </p>
        <div className="bg-base-200 p-4 rounded-lg mb-4">
          <p className="text-sm italic">
            💬 "Rosalinda, parent: 'Mr. Pena is not only an amazing teacher but also a gifted musician.'"
          </p>
        </div>
        <p className="py-6">
        Johnny Peña has been a music educator for the last 15 years and has taught private guitar instruction, guitar ensemble, guitar literature, music theory, and guitar pedagogy. He has been on faculty at two Universities: The University of Texas of San Antonio (2018-2022) and Baptist University of the Americas (2016-2018) as a lecturer of guitar. He received a Master of Music Degree in Guitar Performance from UTSA under the direction of Dr. Matthew Dunne in December 2014.
        </p>
        <p>Johnny has participated in many international guitar competitions where he has earned 1st prize from the Mountain View College Festival and Competition (2018) and 3rd prize from the Lone Star Guitar Festival and Competition (2017). He has also had master classes with many world class guitarists including David Russell, Berta Rojas, Xuefei Yang, Adam Holzman, Fabio Montomoli, Bill Kannengiser, and more. One of his favorite performances includes being invited to perform the “Concierto de Aranjuez” at the Majestic Theatre with Symphony Viva in November 2021.
        </p>  
        <p className="py-6">
        Johnny has recently begun a solo music project in which he releases original music under the artist name, “Key Mosaic.” His music features both classical and electric guitars. He enjoys blending classical and contemporary styles to create his music.
        </p>
        <Link to="/first-lesson" className="btn btn-primary btn-lg mt-6">Book Free Trial with Johnny</Link>
      </div>
    </div>
    </div>
        
    </div>    
    </>
  );
}