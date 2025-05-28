// otp.js

// Initialize EmailJS (using your user ID from EmailJS account)
(function () {
    emailjs.init('RUmEaPziwgPAXwKRg'); // Replace with your actual user ID from EmailJS
})();

// Function to generate OTP
function generateOTP() {
    let otp = "";
    const characters = "0123456789";
    for (let i = 0; i < 6; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
}

// Handle the "Send OTP" action
document.getElementById("forgotPasswordForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    
    // Generate the OTP
    const otp = generateOTP();
    console.log(`OTP generated: ${otp}`);  // For testing, OTP is logged to the console

    // Send the OTP via EmailJS
    var templateParams = {
        to_email: email,
        otp_code: otp
    };

    emailjs.send('service123', 'template_0yu6izg', {{otp_code}})
        .then(function(response) {
            console.log('OTP sent successfully:', response);
            // Show OTP input section
            document.getElementById("otpSection").style.display = "block";
            document.getElementById("message").innerText = `OTP has been sent to ${email}. Please check your inbox.`;
            
            // Store the OTP in sessionStorage for verification
            sessionStorage.setItem("otp", otp);
        }, function(error) {
            console.log('Error sending OTP:', error);
            document.getElementById("message").innerText = "Error sending OTP. Please try again later.";
        });
});

// Handle OTP verification
document.getElementById("verifyBtn").addEventListener("click", function () {
    const enteredOtp = document.getElementById("otp").value;
    const storedOtp = sessionStorage.getItem("otp");

    if (enteredOtp === storedOtp) {
        document.getElementById("message").innerText = "OTP Verified! You can now reset your password.";
        document.getElementById("otpError").innerText = "";
    } else {
        document.getElementById("otpError").innerText = "Invalid OTP. Please try again.";
    }
});
