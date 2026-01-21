document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'admin' && password === 'admin') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Incorrect username or password');
  }
});


let users = [
  { fullName: "Hussain Haider", email: "hussain@example.com", username: "hussainbhatti22", role: "Admin", phone: "1234567890" },
  { fullName: "Moeed Amjad", email: "moeed@example.com", username: "Moeedxamjad", role: "Admin", phone: "9876543210" },
  { fullName: "Hassan Ali", email: "hassan@example.com", username: "hassanali1", role: "Employee", phone: "5555555555" }
];


let jobs = [
  { 
    id: 1,
    title: "Frontend Developer",
    description: "Develop responsive web pages",
    skills: "HTML, CSS, JavaScript, Bootstrap",
    experience: "2 years",
    job_link: "https://example.com/job/1",
    created_by: "Admin",
    created_at: "2026-01-21",
    deadline: "2026-02-28"
  },
  { 
    id: 2,
    title: "Backend Developer",
    description: "Build REST APIs",
    skills: "Node.js, Express, MongoDB",
    experience: "3 years",
    job_link: "https://example.com/job/2",
    created_by: "Admin",
    created_at: "2026-01-21",
    deadline: "2026-03-15"
  }
];


function displayUsers() {
  const tbody = document.getElementById("userTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement('tr');

    if(user.role === 'Admin') row.classList.add('table-primary');
    else if(user.role === 'Employee') row.classList.add('table-success');
    else row.classList.add('table-warning');

    row.innerHTML = `
      <td>${user.fullName}</td>
      <td>${user.email}</td>
      <td>${user.username}</td>
      <td>${user.role}</td>
      <td>${user.phone}</td>
      <td>
        <button class="btn btn-sm btn-primary me-1" onclick="editUser(${index})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteUser(${index})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function editUser(index) {
  const user = users[index];

  document.getElementById('editIndex').value = index;
  document.getElementById('editFullName').value = user.fullName;
  document.getElementById('editEmail').value = user.email;
  document.getElementById('editUsername').value = user.username;
  document.getElementById('editRole').value = user.role;
  document.getElementById('editPhone').value = user.phone;

  const editModal = new bootstrap.Modal(document.getElementById('editUserModal'));
  editModal.show();
}

document.getElementById('saveEditBtn')?.addEventListener('click', function() {
  const index = document.getElementById('editIndex').value;

  users[index].fullName = document.getElementById('editFullName').value;
  users[index].email = document.getElementById('editEmail').value;
  users[index].username = document.getElementById('editUsername').value;
  users[index].role = document.getElementById('editRole').value;
  users[index].phone = document.getElementById('editPhone').value;

  displayUsers();

  const editModal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
  editModal.hide();
});

function deleteUser(index) {
  if(confirm(`Are you sure you want to delete ${users[index].fullName}?`)) {
    users.splice(index, 1);
    displayUsers();
  }
}


function displayJobs() {
  const tbody = document.getElementById("jobTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  jobs.forEach((job, index) => {
    const row = document.createElement('tr');
    row.classList.add('table-info');

    row.innerHTML = `
      <td>${job.id}</td>
      <td>${job.title}</td>
      <td>${job.description}</td>
      <td>${job.skills}</td>
      <td>${job.experience}</td>
      <td><a href="${job.job_link}" target="_blank">Link</a></td>
      <td>${job.created_by}</td>
      <td>${job.created_at}</td>
      <td>${job.deadline}</td>
      <td>
        <button class="btn btn-sm btn-primary me-1" onclick="editJob(${index})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteJob(${index})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function editJob(index) {
  const job = jobs[index];

  document.getElementById('editJobIndex').value = index;
  document.getElementById('editJobTitle').value = job.title;
  document.getElementById('editJobDescription').value = job.description;
  document.getElementById('editJobSkills').value = job.skills;
  document.getElementById('editJobExperience').value = job.experience;
  document.getElementById('editJobLink').value = job.job_link;
  document.getElementById('editJobCreatedBy').value = job.created_by;
  document.getElementById('editJobDeadline').value = job.deadline;

  const editModal = new bootstrap.Modal(document.getElementById('editJobModal'));
  editModal.show();
}

document.getElementById('saveJobEditBtn')?.addEventListener('click', function() {
  const index = document.getElementById('editJobIndex').value;

  jobs[index].title = document.getElementById('editJobTitle').value;
  jobs[index].description = document.getElementById('editJobDescription').value;
  jobs[index].skills = document.getElementById('editJobSkills').value;
  jobs[index].experience = document.getElementById('editJobExperience').value;
  jobs[index].job_link = document.getElementById('editJobLink').value;
  jobs[index].created_by = document.getElementById('editJobCreatedBy').value;
  jobs[index].deadline = document.getElementById('editJobDeadline').value;

  displayJobs();

  const editModal = bootstrap.Modal.getInstance(document.getElementById('editJobModal'));
  editModal.hide();
});

function deleteJob(index) {
  if(confirm(`Are you sure you want to delete job: ${jobs[index].title}?`)) {
    jobs.splice(index, 1);
    displayJobs();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById("userTableBody")) displayUsers();
  if(document.getElementById("jobTableBody")) displayJobs();
});
