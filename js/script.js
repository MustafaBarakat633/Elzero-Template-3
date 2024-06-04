const progSpans = document.querySelectorAll("#our-skills .prog-bar span");
progSpans.forEach((span) => (span.style.width = span.dataset.progress));
