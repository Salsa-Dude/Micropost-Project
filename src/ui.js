
class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';
    posts.forEach(function(post) {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fas fa-pencil-alt"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      `;
    });
    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    // createElement
    const div = document.createElement('div');
    // Add class to element
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent container
    const container = document.querySelector('.postsContainer');
    // Get post 
    const posts = document.querySelector('#posts');
    // Insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(()=> {
      this.clearAlert();
    }, 3000);
  }
  
  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear all fields
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  changeFormState(type) {
    if(type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block'

      // Create cancel button
      const cancelButton = document.createElement('button');
      cancelButton.className = 'post-cancel btn btn-light btn-block';
      cancelButton.appendChild(document.createTextNode('Cancel Edit'));

      // Get Parent
      const cardForm = document.querySelector('.card-form');
      // Get element to insert before
      const formEnd = document.querySelector('.form-end');
      // Insert cancel button
      cardForm.insertBefore(cancelButton, formEnd);

    } else {
      this.postSubmit.textContent = 'Post it';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      
      // Remove cancel btn if its there
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // Clear ID from hidden field
      this.clearInputId();
      // Clear fields
      this.clearFields();
    }
  }
  clearInputId() {
    this.idInput.value = '';
  }
}

export const ui = new UI();