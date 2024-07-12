# my9-5personalAssistant

A schedule that helps you organize your workday to be more productive.

Your Task
Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm) by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the Day.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am–5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
The following animation demonstrates the application functionality:



Installation
Clone the repository: https://github.com/MagsZavala/my9-5personalAssistant.git
git clone git@github.com:MagsZavala/my9-5personalAssistant.git
Navigate to the project directory:
cd my9-5personalAssistant
Open index.html in your browser.

Usage
The current date is displayed at the top of the calendar.
Scroll down to view the timeblocks for standard business hours (9am–5pm).
Each timeblock is color-coded to indicate whether it is in the past (gray), present (red), or future (green).
Click into a timeblock to enter an event.
Click the save button for that timeblock to save the event in local storage.
Refresh the page to see that the saved events persist.

Technologies Used
HTML
CSS
JavaScript
jQuery
Day.js


Code Highlights

Displaying the Current Date:
javascript:
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
Generating Time Blocks:
javascript
for (let hour = 9; hour <= 17; hour++) {
  const hourText = hour > 12 ? `${hour - 12}PM` : `${hour}AM`;
  const timeBlock = `
    <div id="hour-${hour}" class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${hourText}</div>
      <textarea class="col-8 col-md-10 description" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `;
  $('.container-lg').append(timeBlock);
}
Saving to Local Storage:
javascript
$('.saveBtn').on('click', function () {
  const hourId = $(this).parent().attr('id');
  const description = $(this).siblings('.description').val();
  localStorage.setItem(hourId, description);
  alert('Appointment was Added to local storage');
});

Deployment
The application is deployed at Live URL
The GitHub repository can be found at GitHub Repository

