const guidesList = document.querySelector('.guides');

// setup guidesList
setupGuides = (data) => {
  if (data.length)
    {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li =`
        <li>
          <div class="collapsible-header grey lighten-4">City: ${guide.city}</div>
          <div class="collapsible-body white">Name: ${guide.name}</div>
        </li>
      `;
      html+=li;
    });
    guidesList.innerHTML = html;
  } else {
    guidesList.innerHTML=`<h5 style="margin: 2em auto; text-align: center">You have to log in to see this content</h5>`;
  }
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});