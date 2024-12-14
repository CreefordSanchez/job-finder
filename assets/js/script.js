'use strict';

function fetchContacts(count = 10, callback) {
  $.ajax({
      url: `https://randomuser.me/api/?results=${count}`,
      dataType: 'json',
      success: function (data) {
          callback(data.results);
      }
  });
}

function shortenName(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

function createContactCard(user) {
  const fullName = `${user.name.first} ${user.name.last}`;
  const smallerName = shortenName(fullName, 20);
  const city = user.location.city;

  return `
      <div style="display: flex; align-items: center; border-radius: 5px; padding: 5px;">
          <img src="${user.picture.medium}" alt="Profile Image" style="border-radius: 50%; width: 22px; margin-right: 10px;">
          <div>
              <p style="margin: 0; font-weight: 300; font-size: 15px;">${smallerName}</p>
              <p style="margin: 0; font-size: 10px;">${city}</p>
          </div>
      </div>
  `;
}


function renderContacts(users) {
  const contactsDiv = $('.contacts');
  contactsDiv.html('');

  users.forEach(user => {
      const contactCard = createContactCard(user);
      contactsDiv.append(contactCard);
  });
}

function displayContacts() {
  fetchContacts(10, function (users) {
      if (users.length > 0) {
          renderContacts(users);
      }
  });
}

displayContacts();