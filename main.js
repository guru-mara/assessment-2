let projects = [];
document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addProject();
});
function addProject() {
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;

    const project = {
        id: Date.now(),
        name: name,
        description: description
    };

    projects.push(project);
    displayProjects();
    document.getElementById('projectForm').reset();
}

// Delete project function
function deleteProject(id) {
    projects = projects.filter(project => project.id !== id);
    displayProjects();
}
function displayProjects() {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement('li');
        li.className = 'project-card';
        li.innerHTML = `
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
            <div class="project-actions">
                <button onclick="viewProject(${project.id})">View</button>
                <button onclick="deleteProject(${project.id})">Delete</button>
            </div>
        `;
        projectsList.appendChild(li);
    });
}
function viewProject(id) {
    const project = projects.find(p => p.id === id);
    alert(`Project: ${project.name}\nDescription: ${project.description}`);
}

function searchProjects() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProjects = projects.filter(project => project.name.toLowerCase().includes(searchInput));
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';
    filteredProjects.forEach(project => {
        const li = document.createElement('li');
        li.className = 'project-card';
        li.innerHTML = `
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
            <div class="project-actions">
                <button onclick="viewProject(${project.id})">View</button>
                <button onclick="deleteProject(${project.id})">Delete</button>
            </div>
        `;
        projectsList.appendChild(li);
    });
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.activeElement === document.getElementById('searchInput')) {
            searchProjects();
        } else {
            addProject();
        }
    }
});
