const users = [
  {
    fullname: "Aarav Sharma",
    profession: "Software Engineer",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    address: "Bangalore, Karnataka",
    description: "Backend developer with expertise in Node.js and system design."
  },
  {
    fullname: "Priya Verma",
    profession: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    address: "Pune, Maharashtra",
    description: "Creates user-centered designs for mobile and web applications."
  },
  {
    fullname: "Rohan Mehta",
    profession: "Data Analyst",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    address: "Mumbai, Maharashtra",
    description: "Specializes in SQL, Power BI, and predictive analytics."
  },
  {
    fullname: "Simran Kaur",
    profession: "Graphic Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    address: "Delhi",
    description: "Passionate about branding, illustration, and creative visuals."
  },
  {
    fullname: "Aditi Singh",
    profession: "Doctor",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    address: "Lucknow, Uttar Pradesh",
    description: "General physician dedicated to patient care and diagnostics."
  },
  {
    fullname: "Kunal Jadhav",
    profession: "Fitness Trainer",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    address: "Nagpur, Maharashtra",
    description: "Certified trainer helping people achieve strength and conditioning goals."
  },
  {
    fullname: "Neha Kapoor",
    profession: "Digital Marketer",
    img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg",
    address: "Gurgaon, Haryana",
    description: "Expert in social media strategy and paid advertising."
  },
  {
    fullname: "Vikram Chauhan",
    profession: "Photographer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    address: "Jaipur, Rajasthan",
    description: "Professional photographer specializing in portraits and weddings."
  }
];

let sum = " ";

users.forEach(function(user){
    sum = sum + `<div class="card">
            <img src="${user.img}" alt="img">
            <h3>${user.fullname}</h3>
            <h4>${user.profession}</h4>
            <p>${user.description}</p>
        </div>`;
})

let main = document.querySelector("main");

main.innerHTML = sum;

