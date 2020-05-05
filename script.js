
toggleActive = (elem) => $(elem).toggleClass('active');

/**
 * Update the output text as you type in the textarea
 */
updateText = () => {
    let text = $("#text-input").val();
    $('#text-output').text(text);
  }
  
  /**
   * Toggle the bold class for the output text
   */
  makeBold = (elem) => {
    toggleActive(elem);
    $('#text-output').toggleClass('bold');
  }
  
  /**
   * Toggle the italic class for the output text
   */
  makeItalic = (elem) => {
    toggleActive(elem);
    $('#text-output').toggleClass('italic');
  }
  
  /**
   * Toggle the underline class for the output text
   */
  makeUnderline = (elem) => {
    toggleActive(elem);
      $('#text-output').toggleClass('underline');
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   */
  alignText = (elem, alignType) => {
    $('#text-output').css('textAlign',alignType);

    deActivateAllAlignButtons();
    
    toggleActive(elem);
  }

  deActivateAllAlignButtons = () => {
      let alignButtons = $('.align');

      alignButtons.toArray().forEach((btn) => {
          $(btn).removeClass('active');
      });
  }