import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import aboutHeroImg from "./../../../assets/images/sites/about-hero.jpg";
import { setCurrentView } from "./../../../redux/actions/data/dataActions";
import { useDispatch } from "react-redux";
import "./scss/style.scss";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentView(false));
  }, []);

  return (
    <>
      <div className="about--wrapper">
        <section
          className="section section-hero"
          style={{
            background: `url(${aboutHeroImg})`,
          }}
        >
          <div className="section--container">
            <img
              src={require("./../../../assets/images/sites/AMMIcon.png")}
              style={{ maxWidth: 140 }}
            />

            <h3 className="primary-sub-heading">Our mission</h3>
            <h1 className="primary-heading">
              Helping homeowners get the best deal on solar.
            </h1>
          </div>
        </section>

        <section className="section section-two">
          <div className="section--container">
            <img
              src={require("./../../../assets/images/sites/UnderstandIcon.png")}
              style={{ maxWidth: 140 }}
            />
            <h2 className="primary-heading">
              We understand Going solar can get complicated
            </h2>
            <p>
              People have questions about solar, and it isn’t always so easy to
              find answers. We wanted to help clear the confusion for homeowners
              by providing a simple, streamlined, UNBIASED one-stop-shop for
              solar. Whether you’re looking for the lastest news, general
              information, or live quotes - we’ve got you covered.
            </p>
          </div>
        </section>

        <section className="section section-three">
          <div className="section--container">
            <img
              src={require("./../../../assets/images/sites/SimplifiedIcon.png")}
              style={{ maxWidth: 140 }}
            />
            <h2 className="primary-heading">So we simplified the process.</h2>
            <p>
              Our platform puts homeowners at the forefront, drawing top-notch
              solar installers from around the country who are hungry to compete
              for your business. By making the installers compete, you can rest
              assured that you are receiving their best offer. We make
              comparison shopping easy by giving consumers several offers to
              choose from in a matter of minutes!
            </p>
          </div>
        </section>

        <section className="section section-four">
          <div className="section--container">
            <div className="boxes">
              <div className="box">
                <h3 className="box--title">No comission</h3>
                <p>
                  We want you to receive the best deal on solar, period. It
                  doesn't matter to us which solar installer you end up
                  choosing; we just want it to be the RIGHT solar installer.
                </p>
              </div>
              <div className="box">
                <h3 className="box--title">Instant estimates</h3>
                <p>
                  Our platform allows consumers to get a system estimate in a
                  matter of seconds. With it, you’ll receive estimated system
                  size, annual production, and 20-year savings.
                </p>
              </div>
              <div className="box">
                <h3 className="box--title">Vetted installer network</h3>
                <p>
                  Say goodbye to all of the back-and-forth negotiation that
                  typically comes with comparison shopping. Our competitive
                  marketplace does all the legwork for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-company">
          <div className="section--container">
            <h2 className="primary-heading">Our goal</h2>
            <p>
              We understand that going solar is nuanced - there are variables
              that can make the process feel overwhelming including equiment
              types, federal incentives and rebates, cost comparisons, and
              financing methods. Just matching with the right installer who will
              custom design your system to fit your home's specs can be a
              challenge.
            </p>
            <p>
              As solar panel systems slowly step into the mainstream, it's
              natural for confusion to be abound. People have questions about
              solar, and it isn't always so easy to find answers. This is where
              Real Solar Quotes comes in.
            </p>
            <p>
              Real Solar Quotes flips the script on the entire going solar
              process. With us, the homeowner is in the driver's seat. Our
              platform allows you to get all the info you need - comparison
              shop, check incentives and rebates, calculate savings - and get
              the absolute best deal possible.
            </p>
            <p>
              Please join us and you'll see that going solar has never been
              easier.
            </p>
            <h2 className="primary-heading" style={{ marginTop: 30 }}>
              Serving the Early Majority
            </h2>
            <p>
              During the innovative and early adoption stages, installing solar
              panels on your home typically required a large upfront investment
              that could take up to 10 years or more to recoup. The cost to
              install solar was too high for most homeowners and only made
              economical sense if you were spending several hundred dollars
              every month on electricity.
            </p>
            <p>
              In the past 4 years, the cost of solar panels and installations
              have dropped by a significant margin. These advancements in
              technology coupled with federal rebates and incentives have
              eliminated the need for large upfront investments for many
              homeowners; thus, making solar panels more economically viable for
              a much broader range of homeowners.
            </p>
            <img
              src={require("./../../../assets/images/sites/Innovation.jpg")}
            />
            <p>
              Now that homeowners are starting to realize that solar panels are
              a real money-saver, interest has never been higher. As solar
              panels continue to become more and more popular, we saw an
              opportunity to save a whole bunch of people a whole bunch of time,
              and money.
            </p>
            <p>
              Finding the right installer in your specific area that is licensed
              to work on your home can be overwhelming. We're here to make sure
              it's not.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
