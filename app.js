


// The code demonstrates common challenges with callback-based asynchronous programming 
// and serves as a reference for understanding and improving code readability through 
// modern JavaScript techniques.




// Function to simulate a login process with a delay
function loginUser(email, password, callback) {
    setTimeout(() => {
        // Simulating a successful login by passing user data to the callback
        callback({ email });
    }, 3000); // Simulating a 2-second delay
}

// Function to simulate fetching enrolled courses with a delay
function findEnrolledCourses(email, callback) {
    setTimeout(() => {
        // Simulating fetching enrolled courses for the given email
        callback(["Java", "Next.js", "Node.js"]);
    }, 2000); 
}

// Function to simulate fetching episodes of a course with a delay
function getEpisodes(courseTitle, callback) {
    setTimeout(() => {
        // Simulating fetching episodes for the given course title
        callback(["E01", "E02", "E03"]);
    }, 2000);
}

// Example usage of the loginUser function with nested callbacks
loginUser("user@gmail.com", "1234", (userData) => {
    console.log(userData.email); // Logging the email of the logged-in user

    // Nested callback to fetch enrolled courses once logged in
    findEnrolledCourses(userData.email, (courses) => {
        console.log(courses); 

        // Nested callback to fetch episodes of the first course
        getEpisodes(courses[0], (episodes) => {
            console.log(episodes); 
        });
    });
});
