
$(function () {
    // Display the current date in the header
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  
    // Generate time blocks from 9AM to 5PM
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
  
});
  