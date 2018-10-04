
var $form = $(".contactForm"),
  $successMsg = $(".alert");
$form.parsley().on("form:submit", function(){
  $successMsg.show();
  return false; // avoid submitting
});