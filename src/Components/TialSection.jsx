import React from "react";
import Button from "./Button";

const TialSection = () => {
  return (
    <section className="trial mb-20">
      <div className="first">
        <h1 className="text-6xl text-center pt-20">Try It Today</h1>
        <p className="pt-10 text-center">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One <br />
          day however a small line of blind text by the name of Lorem Ipsum
          decided to leave for the far World of <br />
          Grammar.
        </p>
        <div className="flex justify-center items-center py-20">
          <Button color="bg-blue-700" isBorder={false} text="white">
            Get It Now
          </Button>
        </div>
      </div>

      {/* <div className="second">
        <div className="a flex justify-center items-center">
          <img
            src="https://uicookies.com/demo/theme/frame/img/laptop_1.jpg"
            alt=""
          />
        </div>
        <div className="b">
          <div className="ab flex justify-between -my-28">
            <div className="p-10 m-5">
              <h1 className="text-xl text-blue-700 py-5">
                {" "}
                ✔ What is Instant?
              </h1>
              <p className="pl-3 opacity-70">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>

            <div className="p-10 m-5">
              <h1 className="text-xl text-blue-700 py-5">
                {" "}
                ✔ Is this available to my country?
              </h1>
              <p className="pl-3 opacity-70">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
          <div className="cd flex justify-between">
            <div className="p-10 m-5">
              <h1 className="text-xl text-blue-700 py-5">
                {" "}
                ✔ How do I use the new features of Frame App?
              </h1>
              <p className="pl-3 opacity-70">
                On her way she met a copy. The copy warned the Little Blind
                Text, that <br />where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country.
              </p>
            </div>

            <div className="p-10 ml-10  m-5">
              <h1 className="text-xl text-blue-700 py-5">
                {" "}
                ✔ I have technical problem who do I email?
              </h1>
              <p className="pl-3 opacity-70">
                But nothing the copy said could convince her and so it didn’t
                take long until a few insidious Copy Writers ambushed her, made
                her drunk with Longe and Parole and dragged her into their
                agency, where they abused her for their.
              </p>
            </div>
          </div>
        </div>
      </div> */}
       <div className="second">
        <div className="a flex justify-center items-center">
          <img
            src="https://uicookies.com/demo/theme/frame/img/laptop_1.jpg"
            alt=""
          />
        </div>
          <div className="b flex flex-wrap p-10 justify-evenly">
            <div className="w-1/2 p-5">
              <h1 className="text-xl text-blue-700">
                {" "}
                ✔ What is Instant?
              </h1>
              <p className="opacity-70 pt-5">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>

            <div className="w-1/2 p-5">
              <h1 className="text-xl text-blue-700">
                {" "}
                ✔ What is Instant?
              </h1>
              <p className="opacity-70 pt-5">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>

            <div className="w-1/2 p-5">
              <h1 className="text-xl text-blue-700">
                {" "}
                ✔ What is Instant?
              </h1>
              <p className="opacity-70 pt-5">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>

            <div className="w-1/2 p-5">
              <h1 className="text-xl text-blue-700">
                {" "}
                ✔ What is Instant?
              </h1>
              <p className="opacity-70 pt-5">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TialSection;
