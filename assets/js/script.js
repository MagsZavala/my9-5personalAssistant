
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
    // Apply past, present, or future classes to each time block
    function updateTimeBlocks() {
        const currentHour = dayjs().hour();
        $('.time-block').each(function () {
          const blockHour = parseInt($(this).attr('id').split('-')[1]);
          if (blockHour < currentHour) {
            $(this).removeClass('present future').addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past future').addClass('present');
          } else {
            $(this).removeClass('past present').addClass('future');
          }
        });
      }
    
      updateTimeBlocks();
      setInterval(updateTimeBlocks, 60000); // Update every minute
    
      // Save the user input in local storage
      $('.saveBtn').on('click', function () {
        const hourId = $(this).parent().attr('id');
        const description = $(this).siblings('.description').val();
        localStorage.setItem(hourId, description);
        alert('Appointment was Added to local storage');
      });
    
      // Load saved data from local storage
      $('.time-block').each(function () {
        const hourId = $(this).attr('id');
        const savedDescription = localStorage.getItem(hourId);
        if (savedDescription) {
          $(this).find('.description').val(savedDescription);
        }
      });
  
});
  