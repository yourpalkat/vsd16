import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading2">All About Video Store Day</h1>
        <p>In 1976 VHS tapes debuted and “home video” as we know it was born. Enterprising entrepreneurs bought pre-recorded magnetic tapes featuring Hollywood movies and rented them to the public to watch at home. Studios cried foul but were ultimately shot down in the supreme court and an industry that has now spanned decades flourished and forever changed the way we watch and appreciate movies.</p>
        <p>Big business, smelling success, muscled it’s way in with bags of money and ultimately soured the milk for independent retailers and customers alike. Now, the high-speed connectivity of the internet has again brought upheaval and change to the home video marketplace, knocking the corporate players in the teeth and creating a pervasive cultural malaise regarding the viability of hard copy product as a desirable medium for consumers. Who’s gonna pay for milk when the cow is giving it away for free?</p>
        <p>But the Independent Video Store didn’t die off.  Although many of our brothers and sisters had cashed out, laid down or given in, many of us are still here! Thriving on customer service, eclectic selections and a voracious dedication to the media. Carving out a niche market, feeding the needs of film lovers looking for something other than the mediocrity spoon-fed to them by mainstream media outlets.</p>
        <p>In an attempt to consolidate the power of the thousands of independently owned video stores still in operation across the continent and worldwide, we created VIDEO STORE DAY! This international event is celebrated and observed the third Saturday of October each year. It’s purpose is to promote the idea of supporting your local, independent video stores. Stores owned and staffed by human beings who can be relied upon for reviews and recommendations and who truly love what they do – otherwise, why else would they still be doing it?</p>
        <p>Film fans, Directors, actors, producers, screen writers, distributors, labels and anyone in the home entertainment film industry who has a vested interest in working together to promote this industry from the bottom up, should take this day to join with us as independently owned video stores across the world act together, unified in purpose to take a stand and to celebrate the rich history and potential future of Independent Video Shops!</p>
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          <h2 className="heading3">Brought to you by...</h2>
          <ul className="aboutList">
            <li>
              <img src="/public/assets/about/daniel.jpg" alt="Daniel Hanna" />
              <div>
                <h3 className="heading5">Daniel Hanna</h3>
                <p>Owner and Proprietor of Eyesore Cinema and the creator/ instigator of International Independent Video Store Day.</p>
              </div>
            </li>
            <li>
              <img src="/public/assets/about/nick.jpg" alt="Nick Sewell" />
              <div>
                <h3 className="heading5">Nick Sewell</h3>
                <p>Former Video Store Employee, Rock Star and Graphic Designer. Creates all our yearly logos.</p>
              </div>
            </li>
            <li>
              <img src="/public/assets/about/paul.jpg" alt="Paul Traynor" />
              <div>
                <h3 className="heading5">Paul Traynor</h3>
                <p>The strong silent right hand of VSD. Manager of the "Independent DVD Rental Shop Owners Worldwide" group.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="gridWrapper sectionThree">
        <h2 className="heading3">Get in touch</h2>
        <p>Want to say hello? Have questions? Don't we all. Reach out! Email us at <a href="mailto:videostoreday@gmail.com" className="bold">videostoreday@gmail.com</a>!</p>
      </section>
    </>
  );
}
