/**
 * Update the output text as you type in the textarea
 */
function updateText(){
    let text = $("#text-input").val();
    $('#text-output').text(text);
  }
  
  /**
   * Toggle the bold class for the output text
   */
  function makeBold(elem){
    $(elem).toggleClass('active');
    $('#text-output').toggleClass('bold');
  }
  
  /**
   * Toggle the italic class for the output text
   */
  function makeItalic(elem){
    $(elem).toggleClass('active');
    $('#text-output').toggleClass('italic');
  }
  
  /**
   * Toggle the underline class for the output text
   */
  function makeUnderline(elem){
      $(elem).toggleClass('active');
      $('#text-output').toggleClass('underline');
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   */
  function alignText(elem, alignType){
    $('#text-output').css('textAlign',alignType);

    deActivateAllAlignButtons();
    
    $(elem).toggleClass('active');
  }

  function deActivateAllAlignButtons() {
      let alignButtons = $('.align');

      alignButtons.toArray().forEach((btn) => {
          $(btn).removeClass('active');
      });
  }