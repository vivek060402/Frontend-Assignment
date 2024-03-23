document.addEventListener("DOMContentLoaded", function () {
    // Get all phase elements
    const phases = document.querySelectorAll(".phase");
  
    // Loop through each phase
    phases.forEach(function (phase) {
      // Get phase details element
      const phaseDetails = phase.querySelector(".phase-details");
  
      // Show phase details on hover
      phase.addEventListener("mouseover", function () {
        phaseDetails.style.display = "block";
      });
  
      // Hide phase details when mouse leaves phase segment
      phase.addEventListener("mouseout", function () {
        phaseDetails.style.display = "none";
      });
    });
  });
  