var button = document.getElementById('popupButton');
var popupContainer = document.getElementById('popupContainer');
var overlay = document.getElementById('overlay');
var itemInput = document.getElementById('itemInput');
var listAddButton = document.getElementById('listAddButton');
var closePopupButton = document.getElementById('closePopupButton');
var noItemMessage = document.getElementById('noItemMessage');

button.addEventListener('click', function () {
  popupContainer.style.display = 'block';
  overlay.style.display = 'block';
});

listAddButton.addEventListener('click', function () {
  // overlay.style.display = 'block';
  var itemName = itemInput.value;

  if (itemName !== '') {
    var todoBox = document.createElement('div');
    todoBox.classList.add('todo');

    var todoText = document.createElement('p');
    todoText.textContent = itemName;

    var horizontalLine = document.createElement('hr');

    var addButtonTodo = document.createElement('button');
    addButtonTodo.textContent = 'Add';
    addButtonTodo.addEventListener('click', function () {
      var addPopupContainer = document.createElement('div');
      addPopupContainer.classList.add('popup');

      var addPopupContent = document.createElement('div');
      addPopupContent.classList.add('popupContent');

      var addPopupTitle = document.createElement('h2');
      addPopupTitle.textContent = 'Add Item';

      var addItemInput = document.createElement('input');
      addItemInput.type = 'text';
      addItemInput.placeholder = 'Enter an item';

      var joinButton = document.createElement('button');
      joinButton.textContent = 'Join';
      joinButton.style.color='red';
      joinButton.style.borderRadius="10px";

      var closeButton = document.createElement('button');
      closeButton.textContent = 'Close';

      addPopupContent.appendChild(addPopupTitle);
      addPopupContent.appendChild(addItemInput);
      addPopupContent.appendChild(joinButton);
      addPopupContent.appendChild(closeButton);
      addPopupContainer.appendChild(addPopupContent);

      document.body.appendChild(addPopupContainer);

      joinButton.addEventListener('click', function () {
        var item = addItemInput.value;
        if (item !== '') {
          var listItem = document.createElement('p');
          listItem.textContent = item;
          todoBox.appendChild(listItem);
          addItemInput.value = '';
        }
      });

      closeButton.addEventListener('click', function () {
        document.body.removeChild(addPopupContainer);
      });
    });

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      todoBox.parentNode.removeChild(todoBox);
    });

    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(addButtonTodo);
    buttonContainer.appendChild(removeButton);

    todoBox.appendChild(todoText);
    todoBox.appendChild(horizontalLine);
    todoBox.appendChild(buttonContainer);

    var todoContainer = document.getElementById('todoContainer');
    todoContainer.appendChild(todoBox);

    itemInput.value = '';

    // Hide the "No item added" message
    noItemMessage.style.display = 'none';

    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
  }
});

closePopupButton.addEventListener('click', function () {
  popupContainer.style.display = 'none';
  overlay.style.display = 'none';
});