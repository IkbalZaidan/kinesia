document.addEventListener("DOMContentLoaded", function () {
    // Get the doctor ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get("id");

    if (doctorId) {
        // Fetch the doctors.json file
        fetch("../assets/doctors.json")
            .then(response => response.json())
            .then(doctors => {
                // Find the doctor matching the ID
                const doctor = doctors.find(d => d.id === doctorId);

                if (doctor) {
                    // Insert doctor's details into the HTML
                    document.getElementById("doctor-image").src = doctor.image || "assets/img/default-doctor.jpg";
                    document.getElementById("doctor-name").innerText = doctor.name;
                    document.getElementById("doctor-name2").innerText = doctor.name;

                    document.getElementById("doctor-specialty").innerText = doctor.specialty;
                    document.getElementById("doctor-specialty2").innerText = doctor.specialty;

                    document.getElementById("doctor-description").innerText = doctor.description;
                    document.getElementById("doctor-degree").innerText = doctor.degree;
                    document.getElementById("doctor-university").innerText = doctor.university;

                    // Handle Phone
                    // if (doctor.phone !== "Not Available") {
                    //     document.getElementById("doctor-phone").innerText = doctor.phone;
                    //     document.getElementById("doctor-phone").href = `tel:${doctor.phone}`;
                    // } else {
                    //     document.getElementById("doctor-phone").innerText = "Not Available";
                    //     document.getElementById("doctor-phone").removeAttribute("href");
                    // }

                    const phoneElement = document.getElementById("doctor-phone");

                    if (doctor.phone !== "Not Available") {
                        phoneElement.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${doctor.phone}">${doctor.phone}</a>`;
                    } else {
                        phoneElement.innerHTML = `<i class="fas fa-phone"></i> Not Available`;
                    }

                    // Handle Email
                    // if (doctor.email !== "Not Available") {
                    //     document.getElementById("doctor-email").innerText = doctor.email;
                    //     document.getElementById("doctor-email").href = `mailto:${doctor.email}`;
                    // } else {
                    //     document.getElementById("doctor-email").innerText = "Not Available";
                    //     document.getElementById("doctor-email").removeAttribute("href");
                    // }

                    // Handle Areas of Expertise
                    const expertiseList = document.getElementById("expertise-list");
                    expertiseList.innerHTML = ""; // Clear any existing list items

                    if (doctor.areas_of_expertise && doctor.areas_of_expertise.length > 0) {
                        doctor.areas_of_expertise.forEach(area => {
                            let li = document.createElement("li");
                            li.textContent = area;
                            expertiseList.appendChild(li);
                        });
                    } else {
                        let li = document.createElement("li");
                        li.textContent = "Not Available";
                        expertiseList.appendChild(li);
                    }
                } else {
                    document.body.innerHTML = "<h2>Doctor not found</h2>";
                }
            })
            .catch(error => console.error("Error loading doctor data:", error));
    } else {
        document.body.innerHTML = "<h2>No doctor selected</h2>";
    }
});
