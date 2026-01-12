document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("qXh3yV14iPx7N46aK");

  const form = document.getElementById("hire-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form submitted!"); // debug

    emailjs.sendForm(
      "service_lp727my",
      "template_5m3u9jb",
      form
    ).then(() => {
      status.textContent = "Message sent! I’ll get back to you.";
      form.reset();
      console.log("Email sent successfully!"); // debug
    }).catch((error) => {
      console.error("Email failed:", error);
      status.textContent = "Failed to send message.";
    });
  });
});
