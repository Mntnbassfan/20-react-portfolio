import React from 'react';

export default function Portfolio() {
  return (
    <div class="flex d-inline">
      <h1>Portfolio</h1>
      <section class="completed-projects" id="completed-projects">
        <h2>Completed Projects</h2>

        <section class="projects">
          <div>
            <a target="_blank" href="https://mntnbassfan.github.io/mod-1-mini-challenge/"><img src="assets/images/app-1.jpeg" class="app-1-img" alt="application-1" />
            <figcaption><strong>New Web site project</strong></figcaption></a>
          </div>

          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
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
            <img src="00-practice-app\public\images\app-1.jpeg" alt="application-4" />
            <figcaption><strong>Coming Soon</strong></figcaption>
          </div>

          <div>
            <img src="00-practice-app\public\images\app-2.jpg" alt="application-5" />
            <figcaption><strong>Coming Soon</strong></figcaption>
          </div>
          <div>
            <img src="00-practice-app\public\images\app-3.jpg" alt="application-6" />
            <figcaption><strong>Coming Soon</strong></figcaption>
          </div>
        </section>
       
      </section>
    </div>
  );
}
