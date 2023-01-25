import "../CSS/surveyForm.css"

const SurveyForm = () => {
  return (
    <>
      <link rel="stylesheet" href="styles.css" />

      <body>
        <h1 id="title">freeCodeCamp Survey Form</h1>
        <p id="description">
          Thank you for taking th time to help us improve the platform
        </p>

        <form id="survey-form">
          <label id="name-label">
            Name
            <input
              required
              id="name"
              type="text"
              placeholder="Enter your Name"
            />
          </label>
          <label id="email-label">
            Email
            <input
              required
              id="email"
              type="email"
              placeholder="Enter your Email"
            />
          </label>
          <label id="number-label">
            Age
            <input
              required
              id="number"
              type="number"
              placeholder="Age"
              min="16"
              max="120"
            />
          </label>
          <label id="role-dropdown-label">
            Which option best describes your current role?
            <select id="dropdown">
              <option>Student</option>
              <option>Full time job</option>
              <option>Full time learner</option>
              <option>Prefer not to say</option>
              <option>Other</option>
            </select>
          </label>
          <label id="recommendation-radio">
            Would you recommend freeCodeCamp to a friend?
            <input
              id="definitely"
              type="radio"
              name="recommendation-radio"
              value="definitely"
            />
            <label for="definitely">Definitely</label>
            <input
              id="maybe"
              type="radio"
              name="recommendation-radio"
              value="maybe"
            />
            <label for="maybe">Maybe</label>
            <input
              id="not-sure"
              type="radio"
              name="recommendation-radio"
              value="not sure"
            />
            <label for="not-sure">Not sure</label>
          </label>
          <label id="feature-dropdown-label">
            What is your favourite feature of freeCodeCamp?
            <select id="feature-dropdown">
              <option>Challenges</option>
              <option>Projects</option>
              <option>Community</option>
              <option>Open Source</option>
            </select>
          </label>
          <label id="improvement-options">
            What would you like to see improved? (Check all that apply)
            <input
              id="Front-End Projects"
              type="checkbox"
              value="Front-End Projects"
            />
            <label for="Front-End Projects">Front-end Projects</label>
            <input
              id="Back-End Projects"
              type="checkbox"
              value="Back-end Projects"
            />
            <label for="Back-End Projects">Back-end Projects</label>
            <input
              id="Data Visualisation"
              type="checkbox"
              value="Data Visualisation"
            />
            <label for="Data Visualisation">Data Visualisation</label>
            <input id="Challenges" type="checkbox" value="Challenges" />
            <label for="Challenges">Challenges</label>
            <input
              id="Open Source Community"
              type="checkbox"
              value="Open Source Community"
            />
            <label for="Open Source Community">Open Source Community</label>
            <input
              id="Gitter help rooms"
              type="checkbox"
              value="Gitter help rooms"
            />
            <label for="Gitter help rooms">Gitter help rooms</label>
            <input id="Videos" type="checkbox" value="Videos" />
            <label for="Videos">Videos</label>
            <input id="City Meetups" type="checkbox" value="City Meetups" />
            <label for="City Meetups">City Meetups</label>
            <input id="Wiki" type="checkbox" value="Wiki" />
            <label for="Wiki">Wiki</label>
            <input id="Forum" type="checkbox" value="Forum" />
            <label for="Forum">Forum</label>
            <input
              id="Additional Courses"
              type="checkbox"
              value="Additional Courses"
            />
            <label for="Additional Courses">Additional Courses</label>
          </label>
          <label>
            Any comments or suggestions?
            <textarea placeholder="Enter your comment here...."></textarea>
          </label>
          <input id="submit" type="submit" />
        </form>
      </body>
    </>
  );
};

export default SurveyForm;
