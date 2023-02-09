import React from "react";

function Footer() {
    return (
      <div className="headerFooter sticky-bottom">
      <h1 className="text-center">Contact Information</h1>
      <div>
          <ul className="d-flex justify-content-center">
            <li>
              <p><strong>Phone Number: (720) 233-4070</strong></p>
            </li>

            <li>
              <p><strong>Email: Hannatuba@yahoo.com</strong></p>
            </li>

            <li>
              <a href="https://github.com/Mntnbassfan">
                Connect to my GitHub</a
              >
            </li>

            <li>
              <a href="https://linkedin.com/in/tim-hanna-a37b83180">
                Connect to my LinkedIn</a
              >
            </li>
            <li>
              <a href="https://twitter.com/MntnBassDude">
                Connect to my Twitter</a
              >
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Footer;