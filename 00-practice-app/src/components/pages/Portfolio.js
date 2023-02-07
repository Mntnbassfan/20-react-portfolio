import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section class="completed-projects" id="completed-projects">
        <h2>Completed Projects</h2>

        <section class="projects d-flex flex-wrap">
          <div>
            <a
              target="_blank"
              href="https://mntnbassfan.github.io/mod-1-mini-challenge/"
            >
              <img
                class="picSize"
                src="./images/app-4.jpeg"
                alt="application-1"
              />
              <figcaption>
                <strong>New Web site project</strong>
              </figcaption>
            </a>
          </div>

          <div>
            <a target="_blank" href="https://dcavinder.github.io/park_search/">
              <img
                class="picSize"
                src="./images/app-5.jpg"
                alt="application-2"
              />
              <figcaption>
                <strong>Class Project - 1 Park Search</strong>
              </figcaption>
            </a>
          </div>

          <div>
            <a target="_blank" href="https://wealthify-app.herokuapp.com/">
              <img
                class="picSize"
                src="./images/app-6.jpg"
                alt="application-2"
              />
              <figcaption>
                <strong>Class Project - 2 Wealthify</strong>
              </figcaption>
            </a>
          </div>

          <div>
            <img
              class="picSize"
              src="./images/app-1.jpeg"
              alt="application-4"
            />
            <figcaption>
              <strong>Coming Soon</strong>
            </figcaption>
          </div>

          <div>
            <img class="picSize" src="./images/app-2.jpg" alt="application-5" />
            <figcaption>
              <strong>Coming Soon</strong>
            </figcaption>
          </div>

          <div>
            <img class="picSize" src="./images/app-3.jpg" alt="application-6" />
            <figcaption>
              <strong>Coming Soon</strong>
            </figcaption>
          </div>
          
        </section>
      </section>
    </div>
  );
}
