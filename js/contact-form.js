const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");

if (form && statusMessage) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const defaultText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Demo mode";
    }

    statusMessage.textContent = "Demo form only. Replace the form action with your preferred endpoint before publishing.";

    setTimeout(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultText || "Send Message →";
      }
    }, 1200);
  });
}
