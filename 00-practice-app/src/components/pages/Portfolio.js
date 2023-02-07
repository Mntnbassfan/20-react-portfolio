import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section class="completed-projects" id="completed-projects">
        <h2>Completed Projects</h2>

        <section class="projects">
          <div>
            <a target="_blank" href="https://mntnbassfan.github.io/mod-1-mini-challenge/"><img src="assets/images/app-1.jpeg" class="app-1-img" alt="application-1" />
            <figcaption><strong>New Web site project</strong></figcaption></a>
          </div>

          <div>
            <a target="_blank" href="https://dcavinder.github.io/park_search/"><img src="assets\images\park search  2022-10-03 172433.png" class="app-2-img" alt="application-2" />
            <figcaption><strong>Class Project - 1 Park Search</strong></figcaption></a>
          </div>

          <div>
            <a target="_blank" href="https://wealthify-app.herokuapp.com/"><img src="assets\images\park search  2022-10-03 172433.png" class="app-2-img" alt="application-2" />
              <figcaption><strong>Class Project - 2 Wealthify</strong></figcaption></a>
          </div>

          <div>
            <img src="assets/images/app-4.jpg" alt="application-4" />
            <figcaption><strong>Coming Soon</strong></figcaption>
          </div>

          <div>
            <img src="assets/images/app-5.jpg" alt="application-4" />
            <figcaption><strong>Coming Soon</strong></figcaption>
          </div>
        </section>
       
      </section>
    </div>
  );
}
